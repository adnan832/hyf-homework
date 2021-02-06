// Series duration of my life


const seriesDurations = 
[
    {
        title: "Dirilis Ertugrul",
        days: 15,
        hours: 22,
        minutes: 30,
    },
    {
        title: "The Flash",
        days: 11,
        hours: 11,
        minutes: 24,
    },
    {
        title: "The Walking dead",
        days: 20,
        hours: 9,
        minutes: 36,
    },
];

function logOutSeriesText() 
{

    var total = 0; // initailizing the total percentage.

    for (let i = 0; i <= 2; i++) 
    {
        var hoursToDay = seriesDurations[i].hours / 24;

        var minToDay = seriesDurations[i].minutes / 1440;

        var days = seriesDurations[i].days;
        
        var totalDays = (days) + (minToDay) + (hoursToDay);

        var percentAge = (totalDays / 29220) * 100;

        percentAge = Number(percentAge.toFixed(2)); // converting to number because .toFixed returns string values..

        console.log(`${seriesDurations[i].title} took ${percentAge}% of my life`);

        total += percentAge;
    }

    console.log(`In total that is ${total}% of my life`);
};

logOutSeriesText();