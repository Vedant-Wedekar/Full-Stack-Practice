const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res)=>{
console.log("Inside the server");
})


app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});
