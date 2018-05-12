// import response from '../response.json';
import response from '../response_mod.json';

// eslint-disable-next-line
const fetchData = () =>
  fetch('https://api.myjson.com/bins/cbyby').then(res => res.json());

// eslint-disable-next-line
const fakeFetch = () => new Promise(resolve => resolve(response));

export default fetchData;
// export default fakeFetch;
