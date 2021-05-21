const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

// Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);
    const mealsById = meals.find((meal) => meal.id === mealId)
    if (isNaN(mealId)) {
      return response.status(400).json("id must be an integer");
    }
    else if (mealsById === undefined) {
      return response.status(200).json("id doest exist");
    }
    else {
      response.send(mealsById);
    }
  } catch (error) {
    throw error;
  }
});

//meals Parameters
router.get("/", async (request, response) => {
  try {
    const { maxPrice, title, createdAfter, limit } = request.query;
    if (isNaN(maxPrice)) {
      return response.status(400).json("id must be an integer");
    } else if (maxPrice) {
      const mealPrice = meals.filter(meal => {
        return meal.price <= parseInt(maxPrice);
      });
      response.send(mealPrice);
    }
    else if (title) {
      const mealTitle = meals.filter(meal => meal.title.toLowerCase().includes(`${title}`));
      response.send(mealTitle);
    } else if (createdAfter) {
      const createdAfterDate = meals.filter(meal => {
        return meal.createdAt >= createdAfter;
      });
      response.send(createdAfterDate);
    } else if (limit) {
      const limitedMeal = meals.slice(0, limit);
      response.send(limitedMeal);
    }
    else
      response.json(meals);
  } catch (error) {
    throw error;
  }
});



module.exports = router;
