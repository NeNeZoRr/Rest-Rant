require('dotenv').config();
const express = require('express');
const app = express();
const placesRouter = require('./Controllers/places');

app.use('/places', placesRouter);

app.get('/', (req, res) => {
    res.send('Finally!');
});

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page</h1>');
});

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
