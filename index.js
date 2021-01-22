const {port,environment} = require("./config")
const user = require("./routes/users")
const dotenv = require("dotenv")
//initialize mongodb
require("./util/initMongoUtil")
const express = require('express')
const app = express();

app.use(express.json());
app.use("/api/user",user);

app.listen(port, ()=> {
    console.log(`listening on port ${port} on ${environment} environment .... `);
});


