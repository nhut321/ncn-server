const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
require('dotenv').config()

const AccountController = function () {
  this.register = async (req, res) => {
    let { email, password } = req.body;
    try {
      const user = await User.findOne({ email });


      // console.log(user)

      if (!user) {
        // res.json('dang ky thanh cong')
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            //Store has in your password DB.
            password = hash
            const newUser = new User({ email, password })
            newUser.save()
            res.json({
              status: 200,
              message: 'Dang ky thanh cong'
            })
          })
        })
      } else {
        res.json({
          message: 'Tai khoan da ton tai'
        })
      }
    } catch (err) {
      res.json({
        status: 500,
        err,
      });
    }
  };

  this.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.json({
          status: 300,
          message: "Email or password incorrect!!!"
        })
      } else {
        // res.json(user.password)
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            const token = jwt.sign({ email: user.email }, process.env.PKEY)
            res.json({
              status: 200,
              message: "Dang nhap thanh cong",
              token
            })
          } else {
            res.json({
              status: 300,
              message: "Email or password incorrect!!!"
            })
          }
        });
      }
    } catch (err) {
      res.json({
        status: 400,
        err,
      });
    }
  };
};

module.exports = new AccountController();
