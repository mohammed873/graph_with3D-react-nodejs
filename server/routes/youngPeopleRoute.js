const router = require("express").Router();

const { getAllYoungPeople  , addPerson} = require("../controllers/youngPeopleController")
 

router.get("/",  getAllYoungPeople);
router.post("/", addPerson);

module.exports = router;