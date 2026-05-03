import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const { Pool } = pg;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: false });

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS registrations (
      id             TEXT PRIMARY KEY,
      category       TEXT NOT NULL,
      name           TEXT NOT NULL,
      email          TEXT NOT NULL,
      affiliation    TEXT,
      country        TEXT,
      theme          TEXT,
      sub_role       TEXT,
      paper_title    TEXT,
      keywords       TEXT,
      dietary        TEXT,
      visa           TEXT,
      reviewer       TEXT,
      payment_status TEXT DEFAULT 'Pending',
      created_at     TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

ensureSchema().catch((err) => console.error("Schema init failed:", err));

const app = express();
app.use(express.json({ limit: "1mb" }));

app.post("/api/registrations", async (req, res) => {
  try {
    const b = req.body ?? {};
    const id = "REG-" + Math.random().toString(36).slice(2, 10).toUpperCase();
    await pool.query(
      `INSERT INTO registrations
        (id, category, name, email, affiliation, country, theme,
         sub_role, paper_title, keywords, dietary, visa, reviewer, payment_status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
      [
        id,
        b.category ?? "",
        b.name ?? "",
        b.email ?? "",
        b.affiliation ?? "",
        b.country ?? "",
        b.theme ?? "",
        b.subRole ?? "",
        b.paperTitle ?? "",
        b.keywords ?? "",
        b.dietary ?? "",
        b.visa ?? "",
        b.reviewer ?? "",
        b.paymentStatus ?? "Pending",
      ]
    );
    res.json({ ok: true, registration: { id } });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ ok: false, error: "Registration failed. Please try again." });
  }
});

const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));
app.get("*", (_req, res) => res.sendFile(path.join(distDir, "index.html")));

const port = Number(process.env.PORT) || 5000;
app.listen(port, "0.0.0.0", () => console.log(`Server on :${port}`));
