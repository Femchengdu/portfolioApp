const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 2888;

const app = new express();
// Application level middleware
app.use(cors());

app.get("/test_server", (req, res) => {
  res.send(
    JSON.stringify({
      test: "Server",
      is: `ready to serve on port: ${port}`,
    })
  );
});

app.listen(port, () => {
  console.log(`Express app started at localhost:${port}`);
});
