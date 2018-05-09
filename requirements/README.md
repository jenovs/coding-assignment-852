## Challenge

Your task is to implement a search result page in ReactJS.
The initial data is organised as a JSON object and can be fetched from https://api.myjson.com/bins/oivjj (the API is CORS enabled). It contains 10 items, and each item represents a tour from the database. This structure contains all required information for creating a SERP.

The layout from the design team is in the [SERP](./serp) folder. To open it, open index.html file in your browser.

The layout should be fully responsive, you can find the desktop and mobile layouts in the link above. We recommend you the "mobile first" approach, but it's completely optional. The size of the page and its resources is important, also some advanced SEO-friendly techniques like lazy loading are welcomed.

Representation: please implement at least one filter (we provided two, so it will be a plus if you do both) and at least one additional sorting (for example, tours can be sorted by default as they appear in JSON, and sorting by tour price); it's the open task, so feel free to implement your own ideas if you want. If you're not sure about the representation logic of certain elements, do as your heart suggests. You can also provide your comments and thoughts about your way of thinking to the form below.

Consider the following hints when implementing the task:

* Prefer pure components that are easy to reuse
* For styling elements you can use CSS or CSS-in-JS, as you like
* You can use additional modules/libraries, but be cautions with the resulting bundle size
