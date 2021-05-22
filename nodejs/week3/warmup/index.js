/*Calculator
Let's again create a calculator. This time the calculator will support 4 features:

Addition
Subtraction
Multiplication
Division*/

const express = require("express");
const app = express();
app.use(express.urlencoded({
    extended: true
}));

// welcome screen
app.get("/", (req, res) => res.send("nodejs week3 homework"));

//Getting data through query parameters using GET

app.get("/calculator/add", (req, res) => {
    try {
	const queryParam = Object.values(req.query);
	const data = queryParam.map(Number);
	const addition = data.reduce((result, value) => (result = result + value));
	isNaN(addition) ? res.status(400).send("Invalid input") : res.send(`Query Params are: ${queryParam} Addition is equal to: ${addition}`);
    } catch (error) {
        response.status(404).send("values undefined");
    }
});

app.get("/calculator/multiply", (req, res) => {
    try{
	const queryParam = Object.values(req.query);
	const data = queryParam.map(Number);
	const multiplication = data.reduce((result, value) => (result = result * value), 1);
	isNaN(multiplication) ? res.status(400).send("Invalid input") : res.send(`Query Params are: ${queryParam} Multiplication is equal to: ${multiplication}`);
} catch (error) {
    response.status(404).send("values undefined");
}
});

app.get("/calculator/subtract", (req, res) => {
    try{
	const queryParam = Object.values(req.query);
	const data = queryParam.map(Number);
	const subtraction = data.reduce((result, value) => (result = result - value));
	isNaN(subtraction) ? res.status(400).send("Invalid input") : res.send(`Query Params are: ${queryParam} Subtraction is equal to: ${subtraction}`);
} catch (error) {
    response.status(404).send("values undefined");
}
});

app.get("/calculator/divide", (req, res) => {
    try{
	const queryParam = Object.values(req.query);
	const data = queryParam.map(Number);
	const division = data.reduce((result, value) => (result = result / value));
    isNaN(division) ? res.status(400).send("Invalid input") : res.send(`Query Params are: ${queryParam} Division is equal to: ${division}`);
    } catch (error) {
        response.status(404).send("values undefined");
    }
   
});

//Getting data through the request body using POST

app.post("/calculator/multiply", (req, res) => {
    try{
        const queryParam = Object.values(req.body);
        const data = queryParam.map(Number);
        const division = data.reduce((result, value) => (result = result * value));
        isNaN(division) ? res.status(400).send("Invalid input") : res.send(`Query Params are: ${queryParam} Multiplication is equal to: ${division}`);
        } catch (error) {
            response.status(404).send("values undefined");
        }
       
    });


    app.post("/calculator/divide", (req, res) => {
        try{
        const queryParam = Object.values(req.query);
        const data = queryParam.map(Number);
        const division = data.reduce((result, value) => (result = result / value));
        isNaN(division) ? res.status(400).send("Invalid input") : res.send(`Query Params are: ${queryParam} Division is equal to: ${division}`);
        } catch (error) {
            response.status(404).send("values undefined");
        }
       
    });

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));