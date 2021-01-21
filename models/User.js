const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength : 2
    },
    username : {
        type: String,
        required: true,
        minlength : 5
    },
    email : {
        type : String,
        required : true,
        unique: true,
        minlength : 5
    },
    password : {
        type: String,
        required: true,
        minlength : 5
    }
});

let User = mongoose.model("User" , userSchema);

module.exports.User = User