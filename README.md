# Nexfar Front-end Challenge

Challenge to Front-end position at Nexfar. It consists in a pharmacy app containg a product list and a cart page. 

## Design Points

This project is a combo of a React UI app and a node server.

  1. [**Node server**](server/): [`server/package.json`](server/package.json)
  2. [**React UI**](client/): [`client/package.json`](client/package.json)
      * generated by [create-react-app](https://github.com/facebookincubator/create-react-app)

## Local Development

As matter to make things easier this project is dockerized and runs by this simple command:

```bash
docker-compose up --build
```

If you still don't have docker-compose installed follow the [link](https://docs.docker.com/compose/install/)

In case you want to do the harder way follow the steps:


### Run the API server

In a terminal:

```bash
# Go to server folder
cd server/

# Initial setup
npm install

# Start the server
npm start
```

### Run the React UI

This React app has a proxy configuration to handle backend requests to the local Node server. [`"proxy"` config](client/package.json)


Open a new terminal tab from the API server and start the UI:

```bash
# Change directory, first
cd client/

# Initial setup
npm install

# Start the server
npm start
```

## Improvements

* Make it resposive to mobile devices.
* Implement filter.
* Implement search.
* Added a quantity selector on cart item.
* Migrate filter, pagination and sort to server.


## Challenges faced.

The biggest challenge was to design a way to make all cart items available throghout the app synchronized with localStorage to keep a track of what user has selected. I also had some troubule in developing pagination component as it's logic is a bit complex as you have to deal with index calculations.
