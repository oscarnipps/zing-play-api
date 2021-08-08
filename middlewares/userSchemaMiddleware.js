const Joi = require("joi");

module.exports =  async (req,res,next)=> {
    let schema = Joi.object({
        name : Joi.string()
            .min(2)
            .required(),

        username : Joi.string()
            .min(5)
            .required(),

        email : Joi.string()
            .required(),

        password : Joi.string()
            .min(5)
            .required()             
    });

    try {
        let result = await schema.validateAsync(req.body);
        next();
    } catch (error) {
        console.log(error.message);

        return res.status(400).send(
            {
                status: "failed",
                message: error.message
            }
        );
    }
}