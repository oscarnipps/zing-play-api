const mongoose = require("mongoose")
const {db_url,db_name} = require("../config")


//mongodb connection
mongoose.connect(db_url , {
    dbName : db_name,
    useFindAndModify : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then(()=> {
    console.log('mongodb connected successfully...');
}).catch((error) => {
    console.log(`error connecting to mongo database with message : ${error.message}`);
});

mongoose.connection.on('connected',()=> {
    console.log("mongoose connected to db")
});

mongoose.connection.on('error',(error)=> {
    console.log(`error connecting mongoose to database with message : ${error.message}`)
});

//disconnect mongoose just before the process is interrupted
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});