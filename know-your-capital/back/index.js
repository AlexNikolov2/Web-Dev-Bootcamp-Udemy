const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const authController = require('./controllers/authController');
const gameController = require('./controllers/gameController');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authController);
app.use('/game', gameController);

app.use(express.static(path.join(__dirname, '../front/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/dist', 'index.html'));
});

const MONGO_URI = 'mongodb://localhost:27017/know-the-capital';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });