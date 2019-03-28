require('dotenv').config();

const PORT = 4000;

const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://breakdown_team:Qawsed.123@cluster0-p0g2k.mongodb.net/budgetapp?retryWrites=true',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
mongoose.set('useFindAndModify', false);

app.use(express.json());

const services = require('./routes/index');

app.use(services);

if (!module.parent) {
  app.listen(PORT, () => console.log(`Port is listening on ${PORT}`)); // eslint-disable-line
}

module.exports = app;