const express = require('express');
// const indexRoute = require('./routes/index');

const app = express();

//Routes

app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));


const PORT = process.env.PORT || 500;

app.listen(PORT, console.log(`Server running on port ${PORT}`));