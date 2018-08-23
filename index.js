const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("This website is owned by Kamran and Sheraz,  you niggas@")
})


app.listen(9000, () => {
    console.log("server is running on 9000");
})