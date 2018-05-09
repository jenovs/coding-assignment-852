import filterByDate from './filterByDate';

const tours = [
  {
    id: 1,
    length: 5,
    dates: [
      {
        start: '2017-03-30',
      },
      {
        start: '2017-04-13',
      },
      {
        start: '2017-04-27',
      },
      {
        start: '2017-05-11',
      },
    ],
  },
  {
    id: 2,
    length: 10,
    dates: [
      {
        start: '2017-03-30',
      },
      {
        start: '2017-03-12',
      },
      {
        start: '2017-04-19',
      },
      {
        start: '2017-06-12',
      },
    ],
  },
  {
    id: 3,
    length: 15,
    dates: [
      {
        start: '2017-08-08',
      },
    ],
  },
];

describe('Utils', () => {
  it('should filter by exact date', () => {
    const res = filterByDate({
      tours,
      fromDate: new Date('2017-03-30'),
      toDate: new Date('2017-03-30'),
    });

    expect(res.length).toBe(2);
    expect(res[0].dates.length).toBe(1);
    expect(res[1].dates.length).toBe(1);
    expect(res[0].dates[0].start).toBe('2017-03-30');
    expect(res[1].dates[0].start).toBe('2017-03-30');
  });

  it('shold filter by range', () => {
    const res = filterByDate({
      tours,
      fromDate: new Date('2017-03-01'),
      toDate: new Date('2017-03-31'),
    });

    expect(res.length).toBe(2);
    expect(res[0].dates.length).toBe(1);
    expect(res[1].dates.length).toBe(2);
    expect(res[0].dates[0].start).toBe('2017-03-30');
    expect(res[1].dates[0].start).toBe('2017-03-30');
    expect(res[1].dates[1].start).toBe('2017-03-12');
  });

  it('should return an empty array when nothing found', () => {
    const res = filterByDate({
      tours,
      fromDate: new Date('2000-01-01'),
      toDate: new Date('2000-01-31'),
    });

    expect(res.length).toBe(0);
  });

  it('should handle invalid date', () => {
    const res = filterByDate({
      tours,
      fromDate: new Date('2000-02-28'),
      toDate: new Date('2000-01-33'),
    });

    expect(res.length).toBe(0);
  });

  it('should filter with durations', () => {
    const res = filterByDate({
      tours,
      fromDate: new Date(2017, 0),
      toDate: new Date(2017, 11),
      durations: {
        min: 9,
        max: 11,
      },
    });

    expect(res.length).toBe(1);
    expect(res[0].dates.length).toBe(4);
  });

  it('should filter with durations and date', () => {
    const res = filterByDate({
      tours,
      fromDate: new Date(2017, 3),
      toDate: new Date(2017, 7, 31),
      durations: {
        min: 9,
        max: 16,
      },
    });

    expect(res.length).toBe(2);
    expect(res[0].dates.length).toBe(2);
    expect(res[0].dates[0].start).toBe('2017-04-19');
    expect(res[1].dates.length).toBe(1);
    expect(res[1].dates[0].start).toBe('2017-08-08');
  });
});
