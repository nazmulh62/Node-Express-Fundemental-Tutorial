const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     //====Query Parameter Value Pass ====//
//     //const id = req.query.id;
//     //const name = req.query.name;
//     //res.send(`<h1>Student Name is : ${name}, ID is : ${id}</h1>`);

//     //===Route Parameter Value Pass===//
//     const id = req.header('id');
//     const name = req.header('name');
//     //const id = req.params.id;
//     //const age = req.params.age;
//     res.send(`<h1>Student id is : ${id}, Name is : ${name}</h1>`);
// })

// Post Request with Json
app.post("/user", (req, res) => { 
    const name = req.body.name;
    const age = req.body.age;
    res.send(`<h1>Welcome : ${name} My Age is : ${age}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
})