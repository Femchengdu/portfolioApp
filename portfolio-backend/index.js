const express = require("express");
const cors = require("cors");
const https = require("https");
const port = process.env.PORT || 2888;

const forceHttps = (req, res, next) => {
  if (!req.secure) {
    res.redirect(301, "https://" + req.hostname + req.originalUrl);
  }
  next();
};

const app = new express();
// Application level middleware
app.all("*", forceHttps);
app.use(cors());

// Server the react files
app.use(express.static(`${__dirname}/client/build`));

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
// Workaround for docker
const privateKeyCert = process.env.CERT_PRIV_KEY; //fs.readFileSync(privateKeyPath, "utf8");
const fullKeyCert = process.env.CERT_FULL_KEY; //fs.readFileSync(fullKeyPath, "utf8");
const options = { key: privateKeyCert, cert: fullKeyCert };

/**
 * http and https as per the docs
 */

app.listen(port, () => {
  console.log(`Express app started at localhost:${config.port}`);
});
https.createServer(options, app).listen(port);
