import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ get: "success" });
});

app.post("/", (req, res) => {
  res.json({ post: "success" });
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
