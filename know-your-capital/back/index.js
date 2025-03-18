const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../front/dist')));

app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});