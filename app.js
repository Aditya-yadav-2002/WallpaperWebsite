const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 80;

// *******use*********
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// ********set**********
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ********get******
app.get("/", (req, res) => {
  res.status(200).render("home.ejs");
});

app.get("/about", (req, res) => {
  res.status(200).render("about.ejs");
});

app.get("/page3", (req, res) => {
  res.status(200).render("page3.ejs");
});

app.get("/page4", (req, res) => {
  res.status(200).render("page4.ejs");
});

app.get("/page5", (req, res) => {
  res.status(200).render("page5.ejs");
});

// ********lisitenOnPort********
app.listen(port,()=>{
    console.log(`app is listen on post ${port}`);
})
