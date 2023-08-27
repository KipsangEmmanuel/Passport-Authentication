const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(express.json);
app.use(cors());

mongoose
.connect('mongodb+srv://emmqnuelkipsqng:register@cluster0.sqquwr8.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB connection successful"))



app.listen(3001, () => {
    console.log('Server running')
})