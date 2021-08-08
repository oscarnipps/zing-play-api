const { required } = require("joi");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const {User}  = require("../models/User");
const jwt = require("jsonwebtoken");
const {private_key} = require("../config")

module.exports = {

    registerUserController : async (req,res) => {
        
        try {
            let salt = await bcrypt.genSalt(10);

            let userHashedPassword = await bcrypt.hash(req.body.password, salt);

            let user = new User({
                name : req.body.name,
                username : req.body.username,
                email : req.body.email,
                password : userHashedPassword
            });

            result = await user.save();

            console.log(JSON.stringify(result));

            let accessToken = jwt.sign({
                name : req.body.name,
                email : req.body.email,
            },private_key);

            res.status(201).send({
                status : "success",
                data : {
                    name : req.body.name,
                    username : req.body.username,
                    email : req.body.email,
                }
            })

        } catch (error) {
            console.log(error.message);

            return res.status(400).send(
                {
                    status: "failed",
                    message: error.message
                }
            );
        } 
    },

    loginUserController : (req,res) => {

    },

    getUserController : (req,res) => {
            res.status(200).send({
                status : "successs",
                message : "no user data "
            });
        }
}
