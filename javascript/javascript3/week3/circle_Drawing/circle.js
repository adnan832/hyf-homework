const canvas = document.querySelector("#circleID");
const ctx = canvas.getContext("2d");

class Circle {
    constructor(x, y, radius, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fillStyle = randomColor();
        ctx.fill();
    }
}
function Interval() {
    setInterval(() => {
        const c1 = new Circle(
            Math.floor(Math.random() * window.innerWidth),
            Math.floor(Math.random() * window.innerHeight),
            Math.floor(Math.random() * 170),
            0,
            2 * Math.PI,
            randomColor
        );
        c1.draw();
    }, 100);
}
// Interval()

function randomNumber(num1) {
    return Math.random() * num1;
}
// create random color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
        // console.log(color)
    }
    return "rgb(" + color.join(",") + ")";
}
randomColor();
//creating random circle
function createRandomCircle(x, y) {
    const r = randomNumber(100);
    const color = randomColor();
    return new Circle(x, y, r, 0, 2 * Math.PI, color);
}
//creating mouse follow circle
document.addEventListener("mousemove", e => {
    console.log(e.clientX, e.clientY);
    createRandomCircle(e.clientX, e.clientY).draw(circleID);
});