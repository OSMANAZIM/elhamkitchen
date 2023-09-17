const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "styles.css")));

// Serve static files from the "images" directory
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", function(req, res) {
  const indexPath = path.join(__dirname, "index.html");
  res.sendFile(indexPath);
});

app.get("/menu", function(req, res) {
  const indexPath = path.join(__dirname, "menu.html");
  res.sendFile(indexPath);
});

app.get("/orderonline", function(req, res) {
  const indexPath = path.join(__dirname,  "orderonline.html");
  res.sendFile(indexPath);
});

app.get("/contact", function(req, res) {
  const indexPath = path.join(__dirname,  "contact.html");
  res.sendFile(indexPath);
});

app.get("/gallary", function(req, res) {
  const indexPath = path.join(__dirname, "gallary.html");
  res.sendFile(indexPath);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
