const User = require('../../models/userModel')
const bcrypt = require("bcrypt")
const Joi = require("joi")
const jwt = require("jsonwebtoken")

exports.getUsers = async (req, res) => {
   User.find()
      .then(users => res.json(users))
      .catch(err => console.log(err))
}

exports.register = async (req, res) => {
   const { name, email, password } = req.body;

   const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(4).required(),
   })

   const { error } = schema.validate(req.body);
   if (error) {
      return res.status(400).send({
         message: error.details[0].message,
      });
   }
   
   const checkEmail = await User.find({ email, })
   if (checkEmail.length != 0) {
      return res.status(400).send({
         status: "Failed",
         message: `Email already exsited`,
      });
   }
   
   const hashedPassword = await bcrypt.hash(password, 10);
   
   const newUser = new User({
      name,
      email,
      phone: null,
      password: hashedPassword,
      address: {
         province: null,
         city: null,
         distric: null,
         detail: null
      }
   })
   
   const secretKey = "sangat-rahasia"
   const token = jwt.sign(
   {
      email: newUser.email,
   },
   secretKey
   );

   newUser.save()
      .then(() => res.json({
         status: "Success",
         message: "Account successfully added!",
         data: {
            name,
            email,
            token,
         }
      }))
      .catch(err => res.status(400).json({
         status: "Failed",
         "message": "Error creating account",
         "error": err,
      }))
}  