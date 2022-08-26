const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})
// Post Request with Json
app.post("/register", (req, res) => { 
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h2>Your Name is ${fullName} and age is ${age}</h2>`);
});

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
})