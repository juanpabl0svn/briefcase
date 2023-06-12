const { Router } = require("express");

// const path = require("path");

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/main.html");
});

router.get("/script/main", (req, res) => {
  res.sendFile(__dirname + "/scripts/main.js");
});

// router.get("/css/style", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "..","/dist/styles.css"));
// });

// router.get("/images/icon", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "..","/images/icon.png"));
// });

module.exports = router;
