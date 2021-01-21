//Ez-Namey (Startup name generator)

const firstWords = ["Genius", "Web", "Talented", "Tennis", "Tough", "Computer", "Software", "Motivational", "Creative", "React"];
const secondWords = ["Scientist", "Developer", "Artist", "Player", "Job", "Engineer", "Testing", "Speaker", "Design", "Facebook"];
const randomNumber0 = Math.floor(Math.random() * 10) + 0;
const randomNumber1 = Math.floor(Math.random() * 10) + 0;

const startupName = (firstWords[randomNumber0] + " " + secondWords[randomNumber1]);

//applying new way to concatenate

console.log(`The startup: ${startupName} contains ${startupName.length} characters`);

const startUpUniqueName = firstWords.length + secondWords.length;
console.log(`Total unique names: ${startUpUniqueName}`);