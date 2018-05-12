import React from 'react';
import styled from 'styled-components';

import Filter from '../Filter';
import NoResults from './NoResults';
import Sort from '../Filter/Sort';
import TourCard from '../TourCard';

import fetchData from '../api/fetchData';
import filterByDate from '../utils/filterByDate';
import toursInNextMonths from '../utils/toursInNextMonths';
import sortByPrice from '../utils/sortByPrice';
import getDurations from '../utils/getDurations';

import { BREAK_LG, BREAK_LG_PX } from '../variables/media';

const Content = styled.div`
  margin: auto;
  max-width: 768px;

  @media ${BREAK_LG} {
    align-self: flex-start;
    justify-content: flex-start;
    display: flex;
    max-width: 100%;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  @media ${BREAK_LG} {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 1700px;
  }
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
    this.handleResize();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { isMobile } = this.state;
    const width = window.innerWidth;

    if (isMobile && width >= BREAK_LG_PX) {
      return this.setState(() => ({
        isMobile: false,
      }));
    }
    if (!isMobile && width < BREAK_LG_PX) {
      return this.setState(() => ({
        isMobile: true,
      }));
    }

    return;
  };

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
    const { filtered, isMobile, loading, sortIdx } = this.state;

    return (
      <Wrapper>
        {!isMobile && <Sort handleSort={this.handleSort} sortIdx={sortIdx} />}
        <Content>
          <Filter
            {...this.state}
            filterFn={this.handleFilterClick}
            applyDurationFilter={this.applyDurationFilter}
            handleSort={this.handleSort}
            handleDatePick={this.handleDatePick}
            isMobile={isMobile}
            sortIdx={sortIdx}
          />
          <div style={{ width: '100%' }}>
            {loading ? (
              <div>Loading...</div>
            ) : filtered.length ? (
              filtered.map(item => <TourCard key={item.id} data={item} />)
            ) : (
              <NoResults />
            )}
          </div>
        </Content>
      </Wrapper>
    );
  }
}

export default App;
