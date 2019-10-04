import express from "express";
import Parser from "rss-parser";

const router = express.Router();

const rssList = new Set();
const parser = new Parser();

router.use((req, res, next) => {
  console.log(req.method, req.originalUrl, req.body);
  next();
});

router.post("/feed", (req, res) => {
  const { url } = req.body;
  if (rssList.has(url)) {
    return res.status(302).json({ added: false });
  }
  rssList.add(url);
  res.status(201).json({ added: true, rssList: [...rssList] });
});

router.delete("/feed", (req, res) => {
  const { url } = req.body;
  if (!rssList.has(url)) {
    res.status(404).json({ removed: false });
  }
  rssList.delete(url);
  return res.status(200).json({ removed: true, rssList: [...rssList] });
});

router.get("/feed", (req, res, next) => {
  console.log(rssList);
  return res.status(200).json([...rssList]);
});

router.get("/refresh", async (req, res, next) => {
  try {
    const result = [];
    for (const url of rssList) {
      const feed = await parser.parseURL(url);
      console.log(feed.title);
      result.push(feed);
    }
    res.send(result);
  } catch (e) {
    next(e);
  }
});
export default router;
