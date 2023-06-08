const express = require("express");
require("dotenv").config();

const router = require('./routes/router');

const app = express();

app.use(router)

PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("listening on port " + PORT));
