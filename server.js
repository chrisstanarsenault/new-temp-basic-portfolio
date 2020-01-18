const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

// serves from from our dist directory which now contains our index.html file
app.use("/", serveStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listing on port: ${port}`);
