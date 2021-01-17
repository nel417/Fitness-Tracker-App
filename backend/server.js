const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo db is connected');
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const mealsRouter = require('./routes/meals')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/meals', mealsRouter);

app.listen(port, () => {
    console.log('server is running!!!!!! on port,' + port);
})