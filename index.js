import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());

// ✅ ES6 __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ EJS view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // no '..' needed now

// ✅ Route
app.get('/', (req, res) => {
  const number = parseInt(req.query.number) || 2;
  const length = parseInt(req.query.length) || 10;

  const tablePrepare = [];
  for (let i = 1; i <= length; i++) {
    tablePrepare.push(`${number} X ${i} = ${number * i}`);
  }

  res.render('table', { tablePrepare });
});

// ✅ Do NOT use app.listen() on Vercel
export const handler = serverless(app);
