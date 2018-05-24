$(document).ready(function() {


var spirit = ""

$("#gin").click(function()
  {
    spirit ="gin"
  }
);

$("#rum").click(function()
    {
        spirit="rum"
    }
);

$("#whiskey").click(function()
    {
        spirit="whiskey"
    }
);

$("#tequila").click(function()
    {
        spirit="tequila"
    }
);
//I know What I Want
var ginRefreshing= [
    "Southside", "Old Maid", "Gin & Tonic"
];
var whiskeyRefreshing= [
    "Mint Julep", "Kentucky Buck", "Whiskey Highball"
];
var rumRefreshing= [
    "Mojito", "Queens Park Swizzle", "Dark and Stormy"
];
var tequilaRefreshing= [
    "In a Flash", "Paloma", "Backyard"
];

$("#refreshing").click(function() {
    if (spirit == "gin") {
        var drinkChoice = ginRefreshing[Math.floor(Math.random() * ginRefreshing.length)];
        console.log(drinkChoice);
    }
    if (spirit == "rum") {
        var drinkChoice = rumRefreshing[Math.floor(Math.random() * rumRefreshing.length)];
        console.log(drinkChoice); 
    }
    if (spirit == "whiskey") {
        var drinkChoice = whiskeyRefreshing[Math.floor(Math.random() * whiskeyRefreshing.length)];
        console.log(drinkChoice);
    }
    if (spirit == "tequila") {
        var drinkChoice = tequilaRefreshing[Math.floor(Math.random() * tequilaRefreshing.length)];
        console.log(drinkChoice);

    }
})

var ginFruity= [
    "Royal Hawaiian", "Seventh Heaven" , "Slippery When Wet"
];
var rumFruity= [
    "Daiquiri", "Mai-Tai", "Pina Colada" 
];
var whiskeyFruity = [
    "Scofflaw", "Whiskey Sour", "Turtle Dove"
];
var tequilaFruity = [
    "Mexican Firing Squad", "Coronado", "Margarita"
];

$("#fruity").click(function() {
    if (spirit == "gin") {
        var drinkChoice = ginFruity[Math.floor(Math.random() * ginFruity.length)];
        console.log(drinkChoice);
    }
    if (spirit == "rum") {
        var drinkChoice = rumFruity[Math.floor(Math.random() * rumFruity.length)];
        console.log(drinkChoice); 
    }
    if (spirit == "whiskey") {
        var drinkChoice = whiskeyFruity[Math.floor(Math.random() * whiskeyFruity.length)];
        console.log(drinkChoice);
    }
    if (spirit == "tequila") {
        var drinkChoice = tequilaFruity[Math.floor(Math.random() * tequilaFruity.length)];
        console.log(drinkChoice);

    }
})

var ginStrong = [
  "martini", "negroni", "hanky panky"
];
var rumStrong = [
  "The Departed", "Society Punch", "The Bachelor"
];
var whiskeyStrong = [
    "Old Fashioned", "Manhattan", "Boulevardier"
];
var tequilaStrong = [
    "The Brave", "Oaxacan Old Fashioned", "Latin Trifecta"
];

$("#strong").click(function() {
    if (spirit == "gin") {
        var drinkChoice = ginStrong[Math.floor(Math.random() * ginStrong.length)];
        console.log(drinkChoice);
    }
    if (spirit == "rum") {
        var drinkChoice = rumStrong[Math.floor(Math.random() * rumStrong.length)];
        console.log(drinkChoice); 
    }
    if (spirit == "whiskey") {
        var drinkChoice = whiskeyStrong[Math.floor(Math.random() * whiskeyStrong.length)];
        console.log(drinkChoice);
    }
    if (spirit == "tequila") {
        var drinkChoice = tequilaStrong[Math.floor(Math.random() * tequilaStrong.length)];
        console.log(drinkChoice);

    }
})

})
//I Don't Know What I Want
// var allStrong= [
//     "martini", "negroni", "hanky panky", "The Departed", "Society Punch", "The Bachelor", "Old Fashioned", "Manhattan", "Boulevardier","The Brave", "Oaxacan Old Fashioned", "Latin Trifecta" 
// ];
// var allFruity= [
//     "Daiquiri", "Mai-Tai", "Pina Colada", "Royal Hawaiian", "Seventh Heaven" , "Slippery When Wet", "Scofflaw", "Whiskey Sour", "Turtle Dove", "Mexican Firing Squad", "Coronado", "Margarita" 
// ];
// var allRefreshing = [
//     "In a Flash", "Paloma", "Backyard", "Mojito", "Queens Park Swizzle", "Dark and Stormy", "Mint Julep", "Kentucky Buck", "Whiskey Highball", "Southside", "Old Maid", "Gin & Tonic" 
// ];


// $("#fruity").click(function() {
//         var drinkChoice = allFruity[Math.floor(Math.random() * allFruity.length)];
//         console.log(drinkChoice);
//     }
// );
// $("#strong").click(function() {
//     var drinkChoice = allStrong[Math.floor(Math.random() * allStrong.length)];
//     console.log(drinkChoice);
//     }
// );
// $("#refreshing").click(function() {
    // var drinkChoice = allRefreshing[Math.floor(Math.random() * allRefreshing.length)];
    // console.log(drinkChoice);



