import React from 'react';
import styled from 'styled-components';

import Filter from '../Filter';
import NoResults from './NoResults';
import TourCard from '../TourCard';

import fetchData from '../api/fetchData';
import filterByDate from '../utils/filterByDate';
import toursInNextMonths from '../utils/toursInNextMonths';
import sortByPrice from '../utils/sortByPrice';
import getDurations from '../utils/getDurations';

const Wrapper = styled.div`
  margin: auto;
  max-width: 768px;
`;

class App extends React.Component {
  state = {
    filtered: [],
    inputType: 'text',
    nextTours: [],
    fromDate: new Date(0),
    toDate: new Date(9999, 0),
    durations: {},
    filterDurations: {},
    activePreset: -1,
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchData()
      .then(response =>
        filterByDate({
          tours: response,
          fromDate: new Date(),
        })
      )
      .then(response => {
        const durations = getDurations(response);
        const nextTours = toursInNextMonths({
          tours: response,
          filterFn: filterByDate,
        });

        this.setState(() => ({
          response,
          filtered: response,
          loading: false,
          nextTours,
          durations,
          filterDurations: { ...durations },
        }));
      })
      .catch(err => console.log(err));
  };

  handleDatePick = value => {
    this.setState(() => value, this.applyDateFilter);
  };

  applyDateFilter = () => {
    const { fromDate, toDate, filterDurations, response, sortIdx } = this.state;

    this.setState(() => ({
      filtered: filterByDate({
        tours: sortIdx ? sortByPrice(response) : response,
        fromDate,
        toDate,
        durations: filterDurations,
      }),
    }));
  };

  applyDurationFilter = (min, max) => {
    this.setState(
      () => ({
        filterDurations: { min, max },
      }),
      this.applyDateFilter
    );
  };

  handleSort = e => {
    const { filtered, response } = this.state;
    const idx = e.target.selectedIndex;

    switch (idx) {
      case 0:
        this.setState(
          () => ({
            filtered: response,
            sortIdx: idx,
          }),
          this.applyDateFilter
        );
        break;
      case 1:
        this.setState(() => ({
          filtered: sortByPrice(filtered),
          sortIdx: idx,
        }));
        break;
      default:
        return;
    }
  };

  handleFilterClick = params => {
    this.setState(() => params, this.applyDateFilter);
  };

  render() {
    const { filtered, loading } = this.state;

    return (
      <Wrapper>
        <Filter
          {...this.state}
          filterFn={this.handleFilterClick}
          applyDurationFilter={this.applyDurationFilter}
          handleSort={this.handleSort}
          handleDatePick={this.handleDatePick}
        />
        <React.Fragment>
          {loading ? (
            <div>Loading...</div>
          ) : filtered.length ? (
            filtered.map(item => <TourCard key={item.id} data={item} />)
          ) : (
            <NoResults />
          )}
        </React.Fragment>
      </Wrapper>
    );
  }
}

export default App;
