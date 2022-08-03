const userName = prompt("What's your name?");
const myName = "Patrick"; 

if (userName == ""){prompt("What's your name?");
} else if (userName == "Patrick") {alert ("Hi, " + userName + ", that's my name, too!");
} else {
    alert ("Hi, " + userName + ", welcome!" );
}

const favoriteTrail = prompt("What's your trail to hike?"); 

if (favoriteTrail == "JMT") {alert ("Mine, too!");
} else {alert ("That's awesome!");
}