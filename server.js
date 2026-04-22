import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json({ limit: "1mb" }));

app.post("/api/registrations", (_req, res) => {
  const id = "REG-" + Math.random().toString(36).slice(2, 10).toUpperCase();
  res.json({ ok: true, registration: { id } });
});

const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));
app.get("*", (_req, res) => res.sendFile(path.join(distDir, "index.html")));

const port = Number(process.env.PORT) || 5000;
app.listen(port, "0.0.0.0", () => console.log(`Server on :${port}`));
