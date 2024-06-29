import express from 'express';
import { handler } from '../dist/server/entry.mjs';
import fs from 'fs';
import path from 'path';

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

app.use(handler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
