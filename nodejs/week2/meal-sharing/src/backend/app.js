const express = require("express");
const app = express();
const route = express();

const mealsRouter = require("./api/meals-router");
const reservationsRouter = require("./api/reservations-router");
const reviewsRouter = require("./api/reviews-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
route.use((req, res, next) => {
	let date = new Date();
	let time = `${date.getDate()}-${date.getMonth() + 1}-
    ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} 
    request received for path: ${req.url}`;
	console.log(time);
	next();
});

app.use("/api/meals", mealsRouter);

app.use("/api/reservations", reservationsRouter);

app.use("/api/reviews", reviewsRouter);

module.exports = app;
