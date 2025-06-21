import express from 'express';
import { handler as astroHandler } from '../dist/server/entry.mjs';
import fs from 'fs';
import path from 'path';
import { config } from '../config-manager/config-manager.mjs';

if (process.env.ENV === 'local') {
  require('dotenv').config();
}
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/systeminfo', (req, res) => {
  const route  = path.resolve('/app/commit.txt');
  const hash = fs.readFileSync(route, 'utf8');

  const commitHash = hash || 'unknown';
  res.json({ hashcommit: commitHash });
});

app.use((req, res, next) => {
  const handler = astroHandler;
  console.log('config -> ', config);
  function isRequestHandler(fn){
    return typeof fn === 'function';
  }

  if (isRequestHandler(handler)) {
    req.locals = config;
    handler(req, res, next);
    return;
  }

  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});