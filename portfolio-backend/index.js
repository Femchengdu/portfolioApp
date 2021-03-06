const express = require("express");
const cors = require("cors");
const https = require("https");
const port = process.env.PORT || 2888;
const portSsl = process.env.PORT_SSL || 2443;

const forceHttps = (req, res, next) => {
  if (!req.secure) {
    console.log("Forcing redirect");
    res.redirect(301, "https://" + req.hostname + req.originalUrl);
  }
  next();
};

const app = new express();
// Application level middleware
app.all("*", forceHttps);
// Server the react files
app.use(express.static(`${__dirname}/client/build`));
app.use(cors());

app.get("/test_server", (req, res) => {
  res.send(
    JSON.stringify({
      test: "Server",
      is: `ready to serve on port: ${port}`,
    })
  );
});

// Handles any requests that don't match the ones above
app.get("/*", (req, res) => {
  console.log("Sending index page");
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
  console.log(`Express app started at localhost:${port}`);
});
https.createServer(options, app).listen(portSsl, () => {
  console.log(`Express app started at localhost:${portSsl}`);
});
