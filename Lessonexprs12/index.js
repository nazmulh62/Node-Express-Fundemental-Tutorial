const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
 console.log("Middle Ware Function");
 req.currentTime = new Date(Date.now());
 next(); // next method
};

// app.get("/", myMiddleWare, (req, res) => {
//     console.log("I am Home." + req.currentTime);
//     res.send("<h1>I am at home Route</h1>");
// });

// app.get("/about", myMiddleWare, (req, res) => {
//     console.log("I am About." + req.currentTime);
//     res.send("<h1>I am at About Route</h1>");
// });
app.use(myMiddleWare);

app.use((req, res, next) => {
    res.send("404 Bad url request");
});

app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
});

app.get("/", (req, res) => {
    console.log("I am Home." + req.currentTime);
    res.send("<h1>I am at home Route</h1>");
});

app.get("/about", (req, res) => {
    console.log("I am About." + req.currentTime);
    res.send("<h1>I am at About Route</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})