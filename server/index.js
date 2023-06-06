require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/db');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT || 3000);
console.log(`Server listening on Port: ${process.env.PORT}.`);
