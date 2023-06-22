const zingMp3Router = require("./ZingMp3Router");
const authRouter = require("./authRouter");

const routes = (app) => {
  app.use("/auth", authRouter)
  app.use("/mp3", zingMp3Router);
  app.use("/", (req, res) => {
    res.json("Helloworld");
  });
};

module.exports = { routes };
