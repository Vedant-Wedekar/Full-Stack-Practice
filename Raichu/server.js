const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    console.log("Inside the server");
    res.send("hello");
});
app.get('/nm', (req, res) => {
    console.log("Inside the server");
    res.send("mf");
});
app.post('/ram', (req, res) => {
    const {name} = req.body;
    res.send(`Form submitted successfully! You entered: ${name}`);
})
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});
