const activities = [];
//funtion below adds activities to the array of objects
function addActivity (date, activity, duration) {
   const newObj = {};
   newObj.date = date;
   newObj.activity = activity;
   newObj.duration = duration;
   activities.push(newObj);
}
addActivity("27/1-2021", "youtube", 60);
addActivity("28/1-2021", "Twitter", 40);
addActivity("29/1-2021", "facebook", 25);
console.log(activities);

var totalActivities = 0;
var totalDuration = 0;
const usageLimit = 100;
//function below shows the status of all activities
function showStatus () {
  if (activities.length === 0) {
    return "Add some activities before calling showStatus";
  }
  else {
    for (let i = 0; i < activities.length; i++) {
      totalActivities+= 1;
      totalDuration+= activities[i].duration;
     }
  }
  console.log("You have added "+totalActivities+" activities.");
  console.log("Total screen time duration is "+totalDuration+" mins");  
}
showStatus();