const express = require("express")
const router = express.Router();


//get user details
router.get("/" , (req,res) => {
    res.status(200).send({
        status : "successs",
        message : "no user data "
    });
});

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
router.post("/create" , (req,res) => {
    let details = req.body;

    console.log(JSON.stringify(details));

    res.status(201).send({
        status : "success",
        data : {
            name : req.body.name,
            username : req.body.username,
            email : req.body.email,

        }
    });

});

//update user details
router.put("/edit" , (req,res) => {

});

//delete user
router.delete("/" , (req,res) => {

});


module.exports = router;