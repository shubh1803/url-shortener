const express = require("express");
const { generateNewShortURL } = require("../controller/url");
const router = express.Router();
router.post(
  "/shorten",
  (req, res, next) => {
    console.log("POST /shorten route hit"); // Debug log
    next(); // Pass control to the next middleware
  },
  generateNewShortURL
);

router.post("/shorten", generateNewShortURL);

module.exports = router;
