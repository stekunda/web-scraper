const express = require("express");
const router = express.Router();
const starWarsController = require("../controllers/starWarsController");

// Gets all Star Wars Characters
router.get("/all", starWarsController.getAllStarWarsChars);

// Gets single Star Wars Character
router.get("/", starWarsController.getStarWarsChar);

// Creates Star Wars Character
router.post("/", starWarsController.addStarWarsChar);

// Updates Star Wars Character
router.patch("/", starWarsController.updateChar);

// Deletes Star Wars Character
router.delete("/", starWarsController.deleteChar);

module.exports = router;
