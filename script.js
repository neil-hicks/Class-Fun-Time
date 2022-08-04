/*const userName = prompt("What's your name?");
const myName = "Patrick"; 

if (userName == ""){prompt("What's your name?");
} else if (userName == "Patrick") {alert ("Hi, " + userName + ", that's my name, too!");
} else {
    alert ("Hi, " + userName + ", welcome!" );
} */


function totalDays() {
    const numTrips = prompt("How many hiking trips do you take a year?"); 
    const averageDays = prompt("How many days does each trip usually last?");
    let totalDays = numTrips * averageDays;
    
    alert("You hike " + totalDays + " days a year!");
    
}

/* const hikingTrips = function(numTrips) {
    if (numTrips >= 12) {
        return "Wow, you're a pro!";
    } else if (numTrips > 6 && numTrips < 11) {
        return "Great job!";
    } else {
        return "You need to just go outside."
    }
const favoriteTrail = prompt("What's your trail to hike?"); 

if (favoriteTrail == "JMT") {alert ("Mine, too!");
} else {alert ("That's awesome!");
}
*/