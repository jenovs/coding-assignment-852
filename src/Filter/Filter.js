import React from 'react';

import DatePicker from './DatePicker';
import DurationFilter from './DurationFilter';
import Sort from './Sort';

import {
  Banner,
  DateFilter,
  Durations,
  Preset,
  Presets,
  Title,
  Title2,
} from './styled';

const Filter = ({
  applyDurationFilter,
  nextTours,
  activePreset,
  durations,
  inputType,
  filterFn,
  handleSort,
  handleDatePick,
}) => {
  return (
    <div>
      <Banner>Filter by:</Banner>
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
        <DatePicker handleDatePick={handleDatePick} />
      </DateFilter>
      <Durations>
        <Title2>Duration</Title2>
        <DurationFilter
          durations={durations}
          applyDurationFilter={applyDurationFilter}
        />
      </Durations>
      <Sort handleSort={handleSort} />
    </div>
  );
};

export default Filter;
