//When will we be there??


const timeTravel = function(distance, speed) 
{
 
var time = distance/speed;
    time = time.toFixed(2);

const str = time.toString();

 var arr = str.split("."); // array of strings
 var arr = arr.map((i) => Number(i)); // converting strings into numbers
 console.log(arr);
 var minutes = arr[1] * 0.60; //converting into minutes.
 var minutes = minutes.toFixed(1);

console.log(`It will take ${arr[0]} hours and ${minutes} minutes to reach your destination`);

};

timeTravel(prompt('how far you want to go? (in KM)'), prompt('how much is your speed ? (in KM/H)'))