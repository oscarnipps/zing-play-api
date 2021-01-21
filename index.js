const express = require('express')
const mongoose = require("mongoose")
const user = require("./routes/users")
const app = express();

app.use(express.json());
app.use("/api/user",user);

const port = 5000;

app.listen(port, ()=> {
    console.log(`listening on port ${port} .... `);
});


