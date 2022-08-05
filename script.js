/*const userName = prompt("What's your name?");
const myName = "Patrick"; 

if (userName == ""){prompt("What's your name?");
} else if (userName == "Patrick") {alert ("Hi, " + userName + ", that's my name, too!");
} else {
    alert ("Hi, " + userName + ", welcome!" );
} */

function totalDays() {
   let numTrips = prompt("How many hiking trips do you take a year?"); 
    while (numTrips == "" || numTrips == null){
       numTrips = prompt("How many hiking trips do you take a year?"); 
    // if (numTrips !== null) break;
}  
    let averageDays = prompt("How many days does each trip usually last?");  
    while (averageDays == "" || averageDays == null){
        averageDays = prompt("How many days does each trip usually last?");
        // prompt("How many days does each trip usually last?");
    // if (averageDays !== null) break;
} 
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
function repeat(){
    let x = prompt("What would you rate this image? (1-5, 5 being the best.");

   // console.log(x);
    
    const emptyDiv = document.getElementById("emptyDiv");
    for (let i = 0; i < x; i++) {
        emptyDiv.innerHTML += ("<div><img src='./images/toomas-tartes-Yizrl9N_eDA-unsplash.jpg' alt = 'W Loop in Chile'>" + (i+1) + "</div>");
    }
    return emptyDiv;        
}   
 //repeat(); 