import React from 'react';

import DatePicker from './DatePicker';
import DurationFilter from './DurationFilter';
import Sort from './Sort';

import {
  Banner,
  Button,
  DateFilter,
  Durations,
  Preset,
  Presets,
  Title,
  Title2,
  Wrapper,
} from './styled';

const Filter = ({
  applyDurationFilter,
  clearFilters,
  nextTours,
  activePreset,
  durations,
  inputType,
  isMobile,
  filterDurations,
  filterFn,
  handleSort,
  handleDatePick,
  sortIdx,
  toDate,
}) => {
  return (
    <Wrapper>
      <Banner>
        Filter by: <Button onClick={clearFilters}>Clear filters</Button>
      </Banner>
      <DateFilter>
        <Title>Departure date</Title>
        <Presets>
          {nextTours.map((tour, i) => (
            <Preset
              key={i}
              active={activePreset === i}
              onClick={() =>
                filterFn({
                  fromDate: tour[2],
                  toDate: tour[3],
                  activePreset: i,
                })
              }
            >
              {tour[0]} {tour[2].getFullYear()} ({tour[1]})
            </Preset>
          ))}
        </Presets>
        <DatePicker handleDatePick={handleDatePick} toDate={toDate} />
      </DateFilter>
      <Durations>
        <Title2>Duration</Title2>
        <DurationFilter
          durations={durations}
          filterDurations={filterDurations}
          applyDurationFilter={applyDurationFilter}
        />
      </Durations>
      {isMobile && (
        <Sort handleSort={handleSort} sortIdx={sortIdx} mobile={true} />
      )}
    </Wrapper>
  );
};

export default Filter;
