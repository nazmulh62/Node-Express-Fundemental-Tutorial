const express = require("express");
const app = express();

const userRouter = require("./routes/users.route"); // New Added
app.use("/api/user",userRouter); // New Added

app.use("/api/user", userRouter);

app.use("/register", (req,res) => {
    // res.status(200).json({
    //     message: "I am register page",
    //     statusCode: 200,
    // });
    //res.redirect("/login");
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
    //res.cookie("name", "najmul");
    //res.cookie("age", "30");
    res.clearCookie("name");
    res.append("id", "13007");
    res.end();
});
 
app.use("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

// app.get("/", (req,res) => {
//     res.send("<h1>I am get request at home route</h1>");
// });

// app.get("/register", (req,res) => {
//     res.send("<h1>I am get request at register route</h1>");
// });

// app.get("/login", (req,res) => {
//     res.send("<h1>I am get request at login route</h1>");
// });

app.use((req,res) => {
    res.send("<h1>404!! Page Not Found<h1>");
})

// app.post("/", (req,res) => {
//     res.send("I am a post request at home route");
// });
// app.put("/", (req,res) => {
//     res.send("I am a put request at home route");
// });
// app.delete("/", (req,res) => {
//     res.send("I am a delete request at home route");
// });

// app.get("/about", (req,res) => {
//     res.send("I am get request at about route");
// });
// app.get("/contact", (req,res) => {
//     res.send("I am get request at contact route");
// })


module.exports = app;