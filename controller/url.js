// const shortid = require("shortid");
// const URl = require("../model/url");

// async function genrateNewShortURL(req, res) {
//   const body = req.body;
//   if (!body.URL) {
//     return res.status(400).json({ error: "please provide URL" });
//   }
//   const shortID = shortid(8);
//   await URL.create({
//     shortId: shortid,
//     redirectURL: body.URL,
//     visitHistory: [],
//   });
//   return res.json({ id: shortId });
// }
// module.exports = { genrateNewShortURL };

// const shortid = require("shortid");
// const URL = require("../model/url");

// async function generateNewShortURL(req, res) {
//   try {
//     const body = req.body;

//     // Check if the URL is provided
//     if (!body.url) {
//       return res.status(400).json({ error: "Please provide a valid URL" });
//     }

//     // Generate a unique short ID
//     const shortId = shortid.generate();

//     // Save the new short URL entry to the database
//     const newUrl = await URL.create({
//       shortId: shortId,
//       redirectURL: body.url,
//       visitHistory: [],
//     });

//     // Respond with the created short ID
//     return res.status(201).json({ id: newUrl.shortId });
//   } catch (err) {
//     console.error("Error generating short URL:", err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// module.exports = { generateNewShortURL };
// const shortid = require("shortid");
// const URL = require("../model/url");

// async function generateNewShortURL(req, res) {
//   try {
//     const body = req.body;
//     if (!body.url) {
//       return res.status(400).json({ error: "Please provide a valid URL" });
//     }

//     const shortId = shortid.generate();
//     const newUrl = await URL.create({
//       shortId: shortId,
//       redirectURL: body.url,
//       visitHistory: [],
//     });

//     return res.status(201).json({ id: newUrl.shortId });
//   } catch (err) {
//     console.error("Error generating short URL:", err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// module.exports = { generateNewShortURL };

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
