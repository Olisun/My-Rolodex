const router = require("express").Router();
const addressBookController = require("../../controllers/addressBookController");


// Matches with "/api/wishlist"
router.route("/")
  .get(addressBookController.findAllAddressBook)
  .post(addressBookController.create);


// Matches with "/api/wishlist/:id"
router.route("/:id")
  .delete(addressBookController.remove)
  .put(addressBookController.update);


module.exports = router;
