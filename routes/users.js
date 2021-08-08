const express = require("express")
const router = express.Router();
const userController = require("../controllers/users");
const userSchemaMiddleware = require("../middlewares/userSchemaMiddleware");


//get user details
router.get("/" , userController.getUserController);

//get specific user details
router.get("/:id" , (req,res) => {
    console.log("user id from query parameter : "  + req.params.id);

    res.status(200).send({
        status : "success",
        message : "created succesfully",
        id : req.params.id
    });

});

//register a new user
router.post("/create" ,userSchemaMiddleware ,userController.registerUserController);

//update user details
router.put("/edit" , (req,res) => {

});



//delete user
router.delete("/" , (req,res) => {

});


module.exports = router;