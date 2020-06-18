const express = require('express');
const app = express();
var path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'theta-outrider-280713',
  keyFilename: './My-website-1c2f5e0e193e.json',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
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
    res.sendFile(path.join(__dirname + '/svkr_resume_c.pdf'));
})
app.post("/message_me", (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    console.log(name, email, message);
    var date = new Date();
    var timestamp = date.getTime();
    console.log(timestamp);
    let docRef = db.collection('my-website').doc(timestamp.toString());
    docRef.set({
        "name": name ,
        "email": email,
        "message": message
      }).then(r=>{
          console.log("Doucment written", r);
          res.sendStatus(200)
          return;
      }).catch(e=>{
          console.log(e);
          res.sendStatus(500);
          return;
      });
})