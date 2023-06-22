const mongoose = require('mongoose')

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.tp3tu.mongodb.net/ncn?retryWrites=true&w=majority"
    );
    // await mongoose.connect('mongodb://localhost:27017/facebook')
    console.log("Connected to DB!");
  } catch (err) {
    console.log("Server connect error");
  }
};

module.exports = {db}
