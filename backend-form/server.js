const express  = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000 ; 
  

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve HTML file


app.post('/submit',(req,res)=>{
    const {name} =  req.body
    console.log("Form submitted:");
    console.log("Name:", name);
    res.send("Form submitted");
})

app.listen(port, ()=>{
    console.log("Server is running on port 3000")
})