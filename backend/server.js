const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

// Veritabanı bağlantısı
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connection success");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// Statik dosyaları sunmak için public klasörünü kullan
app.use(express.static(path.join(__dirname, "public")));

// API rotaları
app.use("/api", mainRoute);

// Diğer tüm GET isteklerini frontend'in index.html dosyasına yönlendir
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Veritabanı bağlantısı ardından sunucuyu başlat
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
