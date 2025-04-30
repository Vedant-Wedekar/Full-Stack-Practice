const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://test123:test123@vedant.6hybv.mongodb.net/?retryWrites=true&w=majority&appName=Vedant')
.then(() => console.log("Database connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const user = mongoose.model("user", userSchema);

// Register Route
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userifexist = await user.findOne({ email });
        if (userifexist) return res.send("User already exist");

        const newUser = new user({ name, email, password });
        await newUser.save();
        res.send("User registered successfully");
    }
    catch {
        res.status(500).send("Internal server error");
    }
});

// Login Route
app.post('/app/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userifexist = await user.findOne({ email });
        if (!userifexist) return res.send("User does not exist");

        if (userifexist.password !== password) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        res.json({ message: '✅ Login successful', user: { name: userifexist.name, email: userifexist.email } });
    }
    catch {
        res.status(500).json({ message: '❌ Login failed' });
    }
});

// Server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
