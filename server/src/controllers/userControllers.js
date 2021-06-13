const User = require('../../models/userModel')

exports.getUsers = async (req, res) => {
   User.find()
      .then(users => res.json(users))
      .catch(err => console.log(err))
}

exports.addUser = async (req, res) => {
   const { name, email, phone, password, address } = req.body;
   const newUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: password,
      address: {
         province: address.province,
         city: address.city,
         distric: address.distric,
         detail: address.detail
      }
   })
   newUser.save()
      .then(() => res.json({
            message: "Account successfully added!"
      }))
      .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
      }))
}  