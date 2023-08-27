const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');


const app = express();
app.use(express.json());
app.use(cors());

mongoose
.connect('mongodb+srv://emmqnuelkipsqng:register@cluster0.sqquwr8.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB connection successful"))
.catch(err => console.error("DB connection error:", err));


app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json(err)); // Sending a 400 Bad Request status

})

app.listen(3001, () => {
    console.log('Server running')
})