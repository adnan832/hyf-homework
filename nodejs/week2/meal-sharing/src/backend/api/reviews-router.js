const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");
//Respond with the json for all reviews
router.get("/", async (request, response) => {
    try {
        response.json(reviews);
    } catch (error) {
      throw error;
    }
  });

// Respond with the json for the reviews with the corresponding id
router.get("/:id", async (request, response) => {
    try {
      const reviewId = parseInt(request.params.id);
      const reviewById = reviews.find((review)=>review.id===reviewId)
      if (isNaN(reviewId)) {
        return response.status(400).json("id must be an integer");
      }
      else if (reviewById === undefined){
        return response.status(200).json("id doest exist");
      }
      else {
      response.send(reviewById);
      }
    } catch (error) {
      throw error;
    }
  });





module.exports = router;