import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// Serve Vite dev middleware in development
if (process.env.NODE_ENV === 'development') {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true }
  });
  app.use(vite.middlewares);
} else {
  // Serve static build files in production
  app.use(express.static(path.join(__dirname, 'dist/public')));
}

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'dist/public', 'index.html'));
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
});
