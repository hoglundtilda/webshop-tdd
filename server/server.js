const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", serveStatic(path.join(__dirname, "../dist")));
