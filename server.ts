import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve physical HTML files if they exist, otherwise fallback to SPA
  const servePhysicalOrSpa = (req, res, physicalFileName) => {
    const physicalPath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist", physicalFileName)
      : path.join(process.cwd(), "public", physicalFileName);
    
    res.sendFile(physicalPath, (err) => {
      if (err) {
        // If physical file fails, fallback to SPA index.html
        const indexPath = process.env.NODE_ENV === "production"
          ? path.join(process.cwd(), "dist/index.html")
          : path.join(process.cwd(), "index.html");
        res.sendFile(indexPath);
      }
    });
  };

  app.get(["/politica-de-privacidade", "/politica-de-privacidade/"], (req, res) => {
    servePhysicalOrSpa(req, res, "politica-de-privacidade.html");
  });
  
  app.get(["/privacidade", "/privacidade/"], (req, res) => {
    servePhysicalOrSpa(req, res, "privacidade.html");
  });

  app.get(["/termos", "/termos/"], (req, res) => {
    servePhysicalOrSpa(req, res, "termos.html");
  });

  app.get("/ADZ884d247c6f65a.html", (req, res) => {
    const filePath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist/ADZ884d247c6f65a.html")
      : path.join(process.cwd(), "public/ADZ884d247c6f65a.html");
    res.sendFile(filePath);
  });

  app.get("/ADZ884d247c6f65a.txt", (req, res) => {
    const filePath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist/ADZ884d247c6f65a.txt")
      : path.join(process.cwd(), "public/ADZ884d247c6f65a.txt");
    res.sendFile(filePath);
  });

  app.get("/adz_verify.txt", (req, res) => {
    const filePath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist/adz_verify.txt")
      : path.join(process.cwd(), "public/adz_verify.txt");
    res.sendFile(filePath);
  });

  app.get("/ads.txt", (req, res) => {
    const filePath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist/ads.txt")
      : path.join(process.cwd(), "public/ads.txt");
    res.sendFile(filePath);
  });

  app.get("/359392222406ac3e9bc7.txt", (req, res) => {
    const filePath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist/359392222406ac3e9bc7.txt")
      : path.join(process.cwd(), "public/359392222406ac3e9bc7.txt");
    res.sendFile(filePath);
  });

  app.get("/359392222406ac3e9bc7333e71c301884d9df532.txt", (req, res) => {
    const filePath = process.env.NODE_ENV === "production"
      ? path.join(process.cwd(), "dist/359392222406ac3e9bc7333e71c301884d9df532.txt")
      : path.join(process.cwd(), "public/359392222406ac3e9bc7333e71c301884d9df532.txt");
    res.sendFile(filePath);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
