import response from '../response.json';

// eslint-disable-next-line
const fetchData = () =>
  fetch('https://api.myjson.com/bins/oivjj').then(res => res.json());

// eslint-disable-next-line
const fakeFetch = () => new Promise(resolve => resolve(response));

export default fetchData;
// export default fakeFetch;
