
const shortid = require("shortid");
const URL = require("../model/url");

async function generateNewShortURL(req, res) {
  try {
    const body = req.body;

    // Validate if URL is provided
    if (!body.url) {
      return res.status(400).json({ error: "Please provide a valid URL" });
    }

    // Generate a short ID
    const shortId = shortid.generate();

    // Save to the database
    const newUrl = await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });

    // Respond with the short ID
    return res.status(201).json({ id: newUrl.shortId });
  } catch (err) {
    console.error("Error generating short URL:", err); // Log the error
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { generateNewShortURL };
