const express = require("express");
const PORT = 5000;
const app = express();

const db = require("./db.json");

app.get("/api/unit", (req, res) => {
  if (db.unit) {
    res.status(200).json(db.unit);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

app.get("/api/picture", (req, res) => {
  if (db.picture) {
    res.json(db.picture);
  } else {
    res.json({ error: "not found" });
  }
});

// app.get("/api/picture", (req, res) => {
//   res.json({ status: "200" });
// });

app.listen(PORT, (req, res) => {
  console.log("express api is running at port ", PORT);
});
