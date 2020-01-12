const router = require("express").Router();
const addressBookController = require("../../controllers/addressBookController");


// Matches with "/api/contacts"
router.route("/")
  .get(addressBookController.findAll)
  .post(addressBookController.create);


// Matches with "/api/contacts/:id"
router.route("/:id")
  .get(addressBookController.findOne)
  .delete(addressBookController.remove)
  .put(addressBookController.update);


module.exports = router;
