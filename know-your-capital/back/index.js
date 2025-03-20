const express = require('express');
const app = express();
const path = require('path');
const authController = require('./controllers/authController');
const port = 3000;

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
    console.log(`Server is running on http://localhost:${port}`);
});