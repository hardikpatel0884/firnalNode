const express = require('express'),
    app = express(),
    session = require('express-session'),
    {config} = require('../utils/config'),
    bodyPrser = require('body-parser');

app.use(bodyPrser());
app.use(bodyPrser.json());

// use of session middleware
app.use(session({secret:'views',cookie:{maxAge:60000}}));
// add name to the session
app.post('/name', (req, res) => {
    let name=req.body.name;

});


// display total number of views
app.get('/views',(req,res)=>{
   if(req.session.views){
       req.session.views++;
       res.send(`total views ${req.session.views}`)
   }else{
       req.session.views=1;
       res.send("welcome to the new demo")
   }
});
app.listen(config.port, () => {
    console.log(`server start on port ${config.port}`)
});