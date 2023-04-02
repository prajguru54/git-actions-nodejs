'use strict';
const express = require("express");

const app = express();

const HOST = '0.0.0.0';
const PORT = 8080;

app.get("/", (req, res) => {
    res.send({ message: "Hello Github Actions v0.1" });
});

app.listen(PORT, () => {
    console.log(`App running on http://${HOST}:${PORT}/`);
});
