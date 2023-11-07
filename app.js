const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
const PartialsPath = path.join(__dirname, "./Templates/partials")
const TemplatePath = path.join(__dirname, "./Templates/views")
app.set("view engine", "hbs")
app.set("views", TemplatePath)
hbs.registerPartials(PartialsPath)
app.get("/", (req, res) => {
  res.render("index");
})
// app.get("/about", (req, res) => {
//   res.render("aboutpage");
// })
// app.get("/auth/login", (req, res) => {
//   res.render("loginpage");
// })
// app.post("/auth/login", async (req, res) => {
//   try {
//     console.log(req.body)
//   } catch (error) {
//     console.log(error)
//   }
// })
// app.get("/auth/singin", (req, res) => {
//   res.render("singinpage");
// })


// app.get('/socket.io/socket.io.js', (req, res) => {
//   res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
// });
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

module.exports = app;
