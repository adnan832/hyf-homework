const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

//Respond with the json for all reservations
router.get("/", async (request, response) => {
    try {
        response.json(reservations);
    } catch (error) {
      throw error;
    }
  });

// Respond with the json for the reservations with the corresponding id
router.get("/:id", async (request, response) => {
    try {
      const reservId = parseInt(request.params.id);
      const reservById = reservations.find((reservation)=>reservation.id===reservId)
      if (isNaN(reservId)) {
        return response.status(400).json("id must be an integer");
      }
      else if (reservById === undefined){
        return response.status(200).json("id doest exist");
      }
      else {
      response.send(reservById);
      }
    } catch (error) {
      throw error;
    }
  });





module.exports = router;