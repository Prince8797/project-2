const express = require("express")
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.js");
})

app.listen(80, () => {
    console.log("server listening at port 80");
})