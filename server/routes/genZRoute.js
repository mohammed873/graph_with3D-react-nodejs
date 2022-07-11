const router = require("express").Router();

const { addSentenceDetail  , getAllSentences} = require("../controllers/genZController")
 

router.get("/",  getAllSentences);
router.post("/", addSentenceDetail);

module.exports = router;