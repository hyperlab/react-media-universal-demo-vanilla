import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const port = process.env.PORT || 4000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) =>
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Vanilla react-media example</title>
    </head>
    <body>
      <div id="app">${renderToString(<App />)}</div>
      <script type="text/javascript" src="/bundle.js"></script>
    </body>
  </html>
  `)
);

server.listen(port);
console.log(`Server listening to localhost:${port}`);
