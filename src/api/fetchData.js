import response from '../response.json';

const fetchData = () =>
  fetch('https://api.myjson.com/bins/oivjj').then(res => res.json());

const fakeFetch = () => new Promise(resolve => resolve(response));

export default fetchData;
// export default fakeFetch;
