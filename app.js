const express = require("express");
const app = express();
const port = 3000;
const index = "/index.html"

app.get("/", (req, res) => res.sendFile(`${__dirname}${index}`));

app.listen(port, () => console.log(`Server running on Port ${port}`));