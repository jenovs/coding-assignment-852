const isNotDate = d => isNaN(Date.parse(d));

const getDateStr = d => d.toISOString().split('T')[0];

export default ({
  tours = [],
  fromDate = new Date(0),
  toDate = new Date(9999, 0),
  durations = { min: -Infinity, max: Infinity },
}) => {
  if (isNotDate(fromDate) || isNotDate(toDate)) return [];

  const fromDateStr = getDateStr(fromDate);
  const toDateStr = getDateStr(toDate);

  return tours.reduce((acc, tour) => {
    const filteredTour = { ...tour, dates: [] };

    if (
      filteredTour.length < durations.min ||
      filteredTour.length > durations.max
    )
      return acc;

    filteredTour.dates = tour.dates.filter(
      d => d.start >= fromDateStr && d.start <= toDateStr
    );

    if (filteredTour.dates.length) {
      acc.push(filteredTour);
    }

    return acc;
  }, []);
};
