const express = require('express');
const app = express();
var path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/inc', express.static(__dirname + '/inc'));
app.use('/js', express.static(__dirname + '/js'));
app.listen(port,function(){
    console.log("running on port ", port);
});
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/my_resume", (req, res)=>{
    res.sendFile(path.join(__dirname + '/my_resume.pdf'));
})