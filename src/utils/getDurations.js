export default tours => {
  return tours.reduce(
    (acc, tour) => {
      if (acc.min > tour.length) acc.min = tour.length;
      if (acc.max < tour.length) acc.max = tour.length;

      return acc;
    },
    { min: Infinity, max: 0 }
  );
};
