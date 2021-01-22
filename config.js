//this module is used to gather up all the environment variables in one place 
//which makes refactoring and maintenace easy
const dotenv = require("dotenv").config()


module.exports = {
    port : process.env.PORT,
    environment : process.env.NODE_ENV,
    db_url : process.env.DATABASE_URL,
    private_key : process.env.ZING_PRIVATE_KEY,
    db_name : process.env.DATABASE_NAME
}