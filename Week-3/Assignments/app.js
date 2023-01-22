const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const { rmSync } = require("fs");

app.use(express.static("./public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

// app.get("/sum.html", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./sum.html"));
// });

app.get("/data", (req, res) => {
  let { number } = req.query;
  number = Number(number);
  if (!req.query.number) {
    return res.json({ error: "Lack of Parameter" });
  } else if (!Number.isInteger(number) || number <= 0) {
    return res.json({ error: "Wrong Parameter" });
  } else {
    let sum = ((1 + number) * number) / 2;
    return res.json({ sum }); //回應數字的話 res.send（）會錯，要用 res.send(sum.toString()) 或 res.send(`${sum}`);
  }
});

app.get("/myName", (req, res) => {
  let { name } = req.cookies;
  if (name) {
    return res.send("Have a nice day, " + name + "!");
  } else {
    return res.sendFile(path.resolve(__dirname, "./public/myName.html"));
  }
});

app.get("/trackName", (req, res) => {
  let { name } = req.query;
  res.cookie("name", name).redirect("/myName");
});

app.listen(3000, () => {
  console.log("The server is listening on port 3000...");
});
