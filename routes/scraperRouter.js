const express = require("express");
const router = express.Router();
const starWarsController = require("../controllers/starWarsController");

// Gets all Star Wars Characters
router.get("/all", starWarsController.getAllChars);

// Gets single Star Wars Character
router.get("/", starWarsController.getChar);

// Creates Star Wars Character
router.post("/", starWarsController.addChar);

// Updates Star Wars Character
router.patch("/", starWarsController.updChar);

// Deletes Star Wars Character
router.delete("/", starWarsController.delChar);

module.exports = router;
