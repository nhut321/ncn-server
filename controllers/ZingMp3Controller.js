const { ZingMp3 } = require("zingmp3-api-full");

const ZingMp3Controller = function () {
  this.getHomePage = async (req, res) => {
    try {
      await ZingMp3.getHome().then((data) => {
        const result = data.data.items.filter((v) => v.viewType === "slider");
        const banner = result.filter((v) => v.sectionType == "banner")[0];
        const homeItem = result.filter((v) => v.sectionType !== "banner");
        res.json({
          status: 200,
          data: homeItem,
          banner,
        });
      });
    } catch (err) {
      res.json({
        status: 401,
        err,
      });
    }
  };

  this.detailPlaylist = async (req, res) => {
    const id = req.params.id;
    try {
      await ZingMp3.getDetailPlaylist(id).then((data) => {
        res.json({
          status: 200,
          data: data.data,
        });
      });
    } catch (err) {
      res.json({
        status: 401,
        err,
      });
    }
  };

  this.songInfo = async (req, res) => {
    const id = req.params.id;
    try {
      await ZingMp3.getInfoSong(id).then((data) => {
        res.json({
          status: 200,
          data,
        });
      });
    } catch (err) {
      res.json({
        status: 401,
        err,
      });
    }
  };

  this.getSourceMp3 = async (req, res) => {
    const id = req.params.id;
    try {
      await ZingMp3.getSong(id).then((data) => {
        res.json({
          status: 200,
          data,
        });
      });
    } catch (err) {
      res.json({
        status: 401,
        err,
      });
    }
  };

  this.search = async (req, res) => {
    const key = req.params.key;
    try {
      await ZingMp3.search(key).then((data) => {
        res.json(data);
      });
    } catch (err) {
      res.json({
        status: 401,
        err,
      });
    }
  };
};

module.exports = new ZingMp3Controller();
