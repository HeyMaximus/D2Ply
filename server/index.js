require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/db');
const controller = require('./controller')
// const {seedData} = require('../database/dummyData')
// const {seedGames} = require('../database/gameSchema')

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

//routes
// seedData();
// seedGames();

app.use('/api/user', controller.getAll)
app.use('/api/friends', controller.getFriends)
app.use('/api/mode', controller.updateMode)
app.use('/api/removegame', controller.delGame)
app.use('/api/addgame', controller.addGame)

app.listen(process.env.PORT || 3000);
console.log(`Server listening on Port: ${process.env.PORT}.`);
