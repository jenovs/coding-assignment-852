import sortByPrice from './sortByPrice';

const tours = [
  {
    id: 1,
    length: 5,
    dates: [
      {
        start: '2017-03-30',
        eur: 100,
      },
      {
        start: '2017-04-27',
        eur: 120,
      },
      {
        start: '2017-05-11',
        eur: 130,
      },
    ],
  },
  {
    id: 2,
    length: 10,
    dates: [
      {
        start: '2017-03-30',
        eur: 100,
      },
      {
        start: '2017-03-12',
        eur: 105,
      },
      {
        start: '2017-04-19',
        eur: 99,
      },
      {
        start: '2017-06-12',
        eur: 110,
      },
    ],
  },
  {
    id: 3,
    length: 15,
    dates: [
      {
        start: '2017-08-08',
        eur: 95,
      },
    ],
  },
];

describe('sortByPrice', () => {
  it('should sort by price ascending', () => {
    const res = sortByPrice(tours);

    expect(res.length).toBe(3);
    expect(res[0].dates.length).toBe(1);
    expect(res[1].dates.length).toBe(4);
    expect(res[2].dates.length).toBe(3);

    // check that original array hasn't changed
    expect(tours.length).toBe(3);
    expect(tours[0].dates.length).toBe(3);
    expect(tours[2].dates.length).toBe(1);
  });
});
