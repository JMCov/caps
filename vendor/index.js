'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');

eventPool.on('VENDOR', (store) => {
  setTimeout(() => {
    handler(store);
  }, 1000);
});

eventPool.on('delivered', (payload) => {
  setTimeout(() => {
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
  }, 1100);
});