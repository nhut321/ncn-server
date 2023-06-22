const router = require("express").Router();
const { ZingMp3 } = require("zingmp3-api-full");
const ZingMp3Controller = require("../controllers/ZingMp3Controller");

router.get("/search/:key", ZingMp3Controller.search);
router.get("/info/source/:id", ZingMp3Controller.getSourceMp3);
router.get("/info/:id", ZingMp3Controller.songInfo);
router.get("/detail/:id", ZingMp3Controller.detailPlaylist);
router.get("/", ZingMp3Controller.getHomePage);

module.exports = router;
