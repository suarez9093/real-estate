const router = require("express").Router();
const realEstateController = require("../../controllers/realEstateController");

// Matches with "/api/books"
router.route("/")
  .get(realEstateController.findAll)
  .post(realEstateController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(realEstateController.findById)
  .put(realEstateController.update)
  .delete(realEstateController.remove);

module.exports = router;
