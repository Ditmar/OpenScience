import express from 'express';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { handler } from '../dist/server/entry.mjs';

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.ENV === 'local') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  require('dotenv').config();
}
const app = express();
// eslint-disable-next-line turbo/no-undeclared-env-vars
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(handler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
