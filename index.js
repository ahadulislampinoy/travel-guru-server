const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const destinations = require("./data/destinations.json");
const hotels = require("./data/hotels.json");

app.get("/", (req, res) => {
  res.send("Welcome To Travel Guru API");
});

app.get("/destinations", (req, res) => {
  res.send(destinations);
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.listen(port, () => {
  console.log("port started on", port);
});

module.exports = app;
