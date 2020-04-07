# Progressive Web app demo

* UNDER DEV *


![pwa](https://github.com/CliffCrerar/purchase-orders/blob/master/src/assets/pwa-image/pwa-3.png?raw=true){style="display: block; max-width: 100%; height: auto;position:relative"}

## Stack

- Front end: `Angular X` (or just `Angular`)
- Web API: `ExpressJs`
- Data Store: `PouchDb`

## Style Library

- Angular Material

# This app is a demo of a web app of the future.

* there is almost no waiting time because data resides in the browsers `indexdb` this is a standard feature of any modern web browser. [`PouchDb`](https://pouchdb.com/) provides the API layer that interacts with the `indexdb` in the browser. Pouchdb can also interface with WebSQL another data storage technology that has been cooked into modern browsers and it provides a data interface that is much like SQL Lite.  

* PouchDb can also integrate with `expressjs` to become a server-side `couchdb` like documents storage. That syncs and keeps all nodes in sync with each other and by placing the appropriate listeners in the front end, the application can be kept in sync almost instantaneously, each time the server emits that it has received an update triggers a sync action and this cascades until all nodes are in sync with each other. Passing this task to the separate threaded web worker keeps the application's service clean and crisp. This also means that the UI stays in sync so when one user updates the data the other use will see the change happening in front of his eyes. Note this still follows the eventual consistency principle. For more in this see the bottom of this with the heading - more reasons to use pouchdb.



