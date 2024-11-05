// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Next.js のページと API ルートをすべて処理
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(4000, (err) => {
    if (err) throw err;
      console.log("> Ready on http://localhost:4000");
  });
});
