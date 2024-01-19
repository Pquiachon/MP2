const ex = require("express");
const fs = require("fs");
const exer = require("./exercises");

const app = ex();

app.use(ex.json());

const e = exer.exercises;
// API
app.get("/api/exercises", (req, res) => {
  res.send(e);
});
// main website
app.get("/home", (req, res) => {
  console.log("Someone accessed the home page");
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.get("/exercises", (req, res) => {
  console.log("Someone accessed the home page");
  fs.readFile("exercises.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.get("/instructors", (req, res) => {
  console.log("Someone accessed the home page");
  fs.readFile("instructors.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.get("/about", (req, res) => {
  console.log("Someone accessed the home page");
  fs.readFile("about.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.listen(3000);
console.log("Starting server.....");
