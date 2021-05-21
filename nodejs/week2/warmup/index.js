const express = require("express");
const app = express();
const route = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
	const first = parseInt(req.query.first);
	const second = parseInt(req.query.second);
	res.send(`The sum of Two Numbers are ${first + second}`);
}); //localhost:3000/numbers/add?first=3&second=7

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);
	res.send(`The Multiplication of Two Numbers are ${first * second}`);
}); //http://localhost:3000/numbers/multiply/1/2

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
