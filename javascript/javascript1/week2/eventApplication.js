const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getEventDay(day) {
    
    const date = new Date();
    
    const today = date.getDay();
       
    const eventDay = (today + day) % 7;
    
    return weekdays[eventDay];
}

console.log("The Event Day Will be held on " + getEventDay(7));