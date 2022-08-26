const fs = require('fs');
//console.log(fs);

//fs.writeFile('demo1.txt', "My Name is Najmul Hossain", (err) => {
fs.exists('demo2.txt', (result) => {
    if(result){
        console.log("found")
    } else{
        console.log("Not Found")
    }
});