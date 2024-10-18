import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/signup.ejs", (req, res) => {
    res.render("signup.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});