const express = require("express");
const urlRoutes = require("./routes/url");
const { connectMongoDb } = require("./connection");
const app = express();
const PORT = 3300;

app.use(express.json());
app.use("/url", urlRoutes);

connectMongoDb("mongodb://127.0.0.1:27017/URL-Shortner")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
