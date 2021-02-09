//const bodyParser = require("body-parser");
// Are these two lines below necessary?
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const fs = require("fs");
const express = require("express");
const cors = require("cors");
/**
 * Add https as per the docs
 */
const https = require("https");
const http = require("http");
const port = process.env.PORT || 80;

// Https forcing middleware
const forceHttps = (req, res, next) => {
  if (!req.secure) {
    res.redirect(301, "https://" + req.hostname + req.originalUrl);
  }
  next();
};

const app = new express();
// Application level middleware
app.use(cors());

// force https using app.all
app.all("*", forceHttps);

// Server the react files
app.use(express.static(`${__dirname}/client/build`));
// My custom application level middleware

app.get("/test_server", (req, res) => {
  res.send(
    JSON.stringify({
      test: "Server",
      is: `ready to serve on port: ${port}`,
    })
  );
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

/*
 * Added to enable https certificate
 */
const fullKeyPath = process.env.FULL_CHAIN_PATH;
const privateKeyPath = process.env.PRIV_KEY_PATH;
const privateKeyCert = fs.readFileSync(privateKeyPath, "utf8");
const fullKeyCert = fs.readFileSync(fullKeyPath, "utf8");
const options = { key: privateKeyCert, cert: fullKeyCert };

/**
 * http and https as per the docs
 */

http.createServer(app).listen(port);
https.createServer(options, app).listen(443);

// Use this in dev mode only
// app.listen(config.port, () => {
//   console.log(`Express app started at localhost:${config.port}`);
// });
