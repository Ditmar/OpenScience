import express from 'express';
import { handler } from '../dist/server/entry.mjs';
if (process.env.ENV === 'local') {
  require('dotenv').config();
}
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/systeminfo', (req, res) => {
  const commitHash = process.env.COMMIT_HASH || 'unknown';
  res.json({ hashcommit: commitHash });
});

app.use(handler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
