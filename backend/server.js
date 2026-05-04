const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ===== CORS CONFIG (PRODUCTION SAFE) =====
const allowedOrigins = ["http://localhost:3000", process.env.FRONTEND_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman / server-to-server
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS not allowed"), false);
      }
    },
    credentials: true,
  }),
);

// ===== MIDDLEWARE =====
app.use(express.json());

// ===== ROUTES =====
app.use("/api/leads", require("./routes/leads"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));

// ===== HEALTH CHECK (IMPORTANT FOR DEPLOY) =====
app.get("/", (req, res) => {
  res.send("🚀 Solar Bhavishya Backend Running");
});

// ===== MONGODB CONNECTION =====
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1); // crash if DB fails (good practice)
  });

// ===== SERVER START =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
