const express = require("express");
require("dotenv").config();
const path = require("path");

const router = require('./routes/router');

const app = express();

app.use(router)

app.use(express.static(path.join(__dirname,'..','public')))

PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("listening on port " + PORT));
