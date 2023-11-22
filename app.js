import * as quate from './modules/quate.js';
import express from 'express';

/* 1. appにインスタンスにexpressを格納*/
const app = express();

/* 2. 3000番ポートで起動する。*/
const port = 3000;
const server = app.listen(port, () => {
  console.log('listening to PORT:' + server.address().port);
});

// quate
app.get('/quate/quote', (req, res, next) => {
  const quateGet = quate.quote();
  quateGet.then((result) => {
    res.json(result);
  });
});

// chart
app.get('/quate/chart', (req, res, next) => {
  const quateGet = quate.chart();
  quateGet.then((result) => {
    res.json(result);
  });
});

// historical
app.get('/quate/historical', (req, res, next) => {
  const quateGet = quate.historical();
  quateGet.then((result) => {
    res.json(result);
  });
});
