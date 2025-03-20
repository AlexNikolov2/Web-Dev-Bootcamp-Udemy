const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authController = require('./controllers/authController');
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../front/dist')));

app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.use('/auth', authController);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});