import express, { json } from 'express';
import { corsMiddleware } from './middleware/cors.js';
import { createMovieRouter } from './routes/movies.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export const createApp = ({ movieModel }) => {
  const app = express();
  app.use(json());
  app.use(corsMiddleware());
  app.disable('x-powered-by');

  // app.get('/', (req, res) => res.sendFile(path.join(__dirname, './web/index.html')));
  app.get('/', (req, res) => res.redirect('/movies'));
  app.use('/movies', createMovieRouter({ movieModel }));

  const PORT = process.env.PORT ?? 1235;

  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};
