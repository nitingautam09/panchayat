import express from 'express';
import path from 'path';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  // Fallback to index.html for SPA routing
  app.get('*', async (req, res) => {
    try {
      let html = await vite.transformIndexHtml(
        req.originalUrl,
        `<html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>अधिकृत ग्रामपंचायत पोर्टल</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/client/src/main.tsx"></script>
          </body>
        </html>`
      );
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e as Error);
      res.status(500).end((e as Error).message);
    }
  });

  const port = 5000;
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`[express] serving on port ${port}`);
  });

  return { app, vite, server };
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
