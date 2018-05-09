const findMin = arr => {
  let min = Infinity;

  arr.forEach(a => {
    if (a.eur < min) min = a.eur;
  });

  return min;
};

export default tours => {
  const res = [...tours];

  return res.sort((a, b) => findMin(a.dates) - findMin(b.dates));
};
