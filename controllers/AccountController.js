const User = require("../models/User");
const bcrypt = require("bcryptjs");

const AccountController = function () {
  this.register = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = new User.find({ email });

      if (!user) {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            // Store hash in your password DB.
            password = hash;
            user.save();
            res.json({
              status: 200,
              message: "Đăng ký thành công",
            });
          });
        });
      } else {
        req.json({
            status: 300,
            message: "Email already exist"
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
    const user = await new User.find({ email });
    try {
      res.json("login");
      // bcrypt.compare(user.password, hash, function(err, res) {
      //     console.log(res)
      // });
    } catch (err) {
      res.json({
        status: 400,
        err,
      });
    }
  };
};

module.exports = new AccountController();
