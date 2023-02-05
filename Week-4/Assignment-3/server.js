const express = require("express");
const path = require("path");
const db = require("./database.js");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/member", (req, res) => {
  res.render("member.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.post("/signup", async (req, res) => {
  const signupData = req.body;
  console.log(signupData);
  const doesEmailExist = await db.checkEmailExist(signupData.email);
  if (doesEmailExist) {
    return res.json({ error: true, msg: "Email is already registered" });
    // return res.send("You have already registered this email.");
  }
  const getRegisterResult = await db.registerUser(
    signupData.email,
    signupData.password
  );
  return res.json({ error: false, msg: "Success!" });
  // return res.redirect("/member");
});

app.post("/signin", async (req, res) => {
  const signupData = req.body;
  const isLoginOk = await db.checkExistMatch(
    signupData.email,
    signupData.password
  );
  if (isLoginOk) {
    return res.json({ error: false, msg: "Success!" });
    // return res.redirect("/member.html");
  }
  return res.json({ error: true, msg: "Incorrect email or password" });
  // return res.send("Incorrect email or password");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("The server is listening on 3000...");
});
