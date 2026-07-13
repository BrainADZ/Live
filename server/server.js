require("dotenv").config();

const express = require("express");
const cors = require("cors");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("BrainADZ Live server is running");
});

app.use("/api", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.API_BASE_URL || `http://localhost:${PORT}`}`);
});