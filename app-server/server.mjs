import express from 'express';
import { handler } from '../dist/server/entry.mjs';
if (process.env.ENV === 'local') {
  require('dotenv').config();
}
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(handler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
