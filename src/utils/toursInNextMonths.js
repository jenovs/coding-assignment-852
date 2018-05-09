// month is zero based
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export default ({ tours = [], count = 5, fromDate = new Date(), filterFn }) => {
  const res = [];
  const offset = fromDate.getTimezoneOffset() / -60;
  const year = fromDate.getFullYear();
  const month = fromDate.getMonth();

  for (let i = 0; i < count; i++) {
    const monthName = new Date(year, month + i).toLocaleString('en-us', {
      month: 'long',
    });
    const days = daysInMonth(year, month + i);
    const fromDate = new Date(year, month + i, 1, offset);
    const toDate = new Date(year, month + i, days, offset);

    const toursFiltered = filterFn({
      tours,
      fromDate,
      toDate,
    });

    const toursCount = toursFiltered.reduce((acc, tour) => {
      acc += tour.dates.length;
      return acc;
    }, 0);

    const s = [];
    s.push(monthName, toursCount, fromDate, toDate);

    res.push(s);
  }
  return res;
};
