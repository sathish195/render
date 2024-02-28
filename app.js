const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("This is from nodejs project");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is Successfully Running http://localhost:${PORT}`);
  else console.log("Error occurred, server can't start", error);
});
