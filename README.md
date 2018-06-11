## Coding assignment 852

See requirements in [requirements](/requirements) folder.

### Tech used:

The project is built with [React](https://github.com/facebook/react) ([Create React App](https://github.com/facebook/create-react-app) takes care of bundling, linting, live server, building etc.) and styled with [styled-components](https://github.com/styled-components/styled-components).

Lazy loading of images with [react-lazyload](https://github.com/jasonslyvia/react-lazyload)

Code is formatted with [prettier](https://github.com/prettier/prettier).

### Getting Started

Download or clone the repo and install dependencies via
```bash
npm i
```
To run development environment with live server:
```bash
npm start
```
To create production build:
```bash
npm run build
```
Files for deployment will be placed in the `/build` folder.

### Notes

I modified response JSON to use more up-to-date dates (added 1 to years 2017 and 2018). New endpoint: https://api.myjson.com/bins/cbyby.  
The app filters out dates older than the current date.

The app is not fully finished:
* not quite good UX during initial load
* regular input fields for duration filter instead of sliders
* default date picker.
