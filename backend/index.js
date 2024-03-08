import express from 'express';
import { PORT, MONGO } from './config.js';
import mongoose from 'mongoose';


const app = express();
app.get('/', (req, res) => {
    console.log(req);
    return res.send('Main App Page');
});

app.listen (PORT, () => {
  console.log(`APP is listening on port ${PORT}`);
});

mongoose
    .connect(MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
    });