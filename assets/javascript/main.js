$( document ).ready(function() {

// 1st choice buttons
$("#iKnow").click(function() {
  $("#doIknow").toggle("slow");
  // $("#gin").toggle("slow");
  // $("#rum").toggle("slow");
  // $("#tequila").toggle("slow");
  // $("#whiskey").toggle("slow");
  $("#spiritChoice").toggle("slow");
});

// Spirit Buttons
var spirit = ""

$("#gin").click(function()
  {
    spirit ="gin"
    $("#spiritChoice").toggle("slow");
    // $("#strong").toggle("slow");
    // $("#fruity").toggle("slow");
    // $("#refreshing").toggle("slow");
    $("#styleChoice1").toggle("slow");
  }
);

$("#rum").click(function()
  {
    spirit ="rum"
    $("#spiritChoice").toggle("slow");
    // $("#strong").toggle("slow");
    // $("#fruity").toggle("slow");
    // $("#refreshing").toggle("slow");
    $("#styleChoice1").toggle("slow");
  }
);

$("#tequila").click(function()
  {
    spirit ="tequila"
    $("#spiritChoice").toggle("slow");
    // $("#strong").toggle("slow");
    // $("#fruity").toggle("slow");
    // $("#refreshing").toggle("slow");
    $("#styleChoice1").toggle("slow");
  }
);

$("#whiskey").click(function()
  {
    spirit ="whiskey"
    $("#spiritChoice").toggle("slow");
    // $("#strong").toggle("slow");
    // $("#fruity").toggle("slow");
    // $("#refreshing").toggle("slow");
    $("#styleChoice1").toggle("slow");
  }
);

// I know my spirit arrays - Gin
var ginStrong = [
  "martini", "negroni", "hanky-panky"
];
var ginFruity = [
    "royal-hawaiian", "seventh-heaven" , "slippery-when-wet"
];
var ginRefreshing = [
    "southside", "old-maid", "gin-tonic"
];

// I know my spirit arrays - Rum
var rumStrong = [
  "departed", "society-punch", "bachelor"
];var rumFruity = [
    "daiquiri", "mai-tai", "pina-colada"
];var rumRefreshing = [
    "mojito", "queens-park-swizzle", "dark-and-stormy"
];

// I know my spirit arrays - tequila
var tequilaStrong = [
    "brave", "oaxacan-old-fashioned", "latin-trifecta"
];
var tequilaFruity = [
    "mexican-firing-squad", "coronado", "margarita"
];
var tequilaRefreshing = [
    "in-a-flash", "paloma", "backyard"
];

// I know my spirit arrays - Whiskey
var whiskeyStrong = [
    "old-fashioned", "manhattan", "boulevardier"
];
var whiskeyFruity = [
    "scofflaw", "whiskey-sour", "turtle-dove"
];
var whiskeyRefreshing = [
    "mint-julep", "kentucky-buck", "whiskey-highball"
];

// I don't know arrays
var allStrong = [
    "martini", "negroni", "hanky-panky", "departed", "society-punch", "bachelor", "old-fashioned", "manhattan", "boulevardier","brave", "oaxacan-old-fashioned", "latin-trifecta"
];

var allFruity = [
    "daiquiri", "mai-tai", "pina-colada", "royal-hawaiian", "seventh-heaven", "slippery-when-wet", "scofflaw", "whiskey-sour", "turtle-dove", "mexican-firing-squad", "coronado", "margarita"
];

var allRefreshing = [
    "in-a-flash", "paloma", "backyard", "mojito", "queens-park-swizzle", "dark-and-stormy", "mint-julep", "kentucky-buck", "whiskey-highball", "southside", "old-maid", "gin-tonic"
];


// Style Buttons Click Functions
$("#strong").click(function() {
  if (spirit == "gin") {
    var drinkChoice = ginStrong[Math.floor(Math.random() * ginStrong.length)];
    }
    else if (spirit == "rum") {
      var drinkChoice = rumStrong[Math.floor(Math.random() * rumStrong.length)];
    }
    else if (spirit == "tequila") {
      var drinkChoice = tequilaStrong[Math.floor(Math.random() * tequilaStrong.length)];
    }
    else if (spirit == "whiskey") {
      var drinkChoice = whiskeyStrong[Math.floor(Math.random() * whiskeyStrong.length)];
    }
    $("#styleChoice1").toggle("slow");
    $("#makeIt").toggle("slow");

    $("#makeIt").click(function() {
      console.log(drinkChoice)
      $("#makeIt").toggle("slow");
        $("#shaker").toggle("slow");
        setTimeout(function(){
          $("#shaker").toggle("slow"); }, 3000);
        setTimeout(function(){
          $("#" + drinkChoice).toggle("slow"); }, 3000);
        });

  });

  $("#fruity").click(function() {
    if (spirit == "gin") {
      var drinkChoice = ginFruity[Math.floor(Math.random() * ginFruity.length)];
      }
      else if (spirit == "rum") {
        var drinkChoice = rumFruity[Math.floor(Math.random() * rumFruity.length)];
      }
      else if (spirit == "tequila") {
        var drinkChoice = tequilaFruity[Math.floor(Math.random() * tequilaFruity.length)];
      }
      else if (spirit == "whiskey") {
        var drinkChoice = whiskeyFruity[Math.floor(Math.random() * whiskeyFruity.length)];
      }
      $("#styleChoice1").toggle("slow");
      $("#makeIt").toggle("slow");

      $("#makeIt").click(function() {
        console.log(drinkChoice)
        $("#makeIt").toggle("slow");
          $("#shaker").toggle("slow");
          setTimeout(function(){
            $("#shaker").toggle("slow"); }, 3000);
          setTimeout(function(){
            $("#" + drinkChoice).toggle("slow"); }, 3000);
          });

    });

    $("#refreshing").click(function() {
      if (spirit == "gin") {
        var drinkChoice = ginRefreshing[Math.floor(Math.random() * ginRefreshing.length)];
        }
        else if (spirit == "rum") {
          var drinkChoice = rumRefreshing[Math.floor(Math.random() * rumRefreshing.length)];
        }
        else if (spirit == "tequila") {
          var drinkChoice = tequilaRefreshing[Math.floor(Math.random() * tequilaRefreshing.length)];
        }
        else if (spirit == "whiskey") {
          var drinkChoice = whiskeyRefreshing[Math.floor(Math.random() * whiskeyRefreshing.length)];
        }
        $("#styleChoice1").toggle("slow");
        $("#makeIt").toggle("slow");

        $("#makeIt").click(function() {
          console.log(drinkChoice)
          $("#makeIt").toggle("slow");
            $("#shaker").toggle("slow");
            setTimeout(function(){
              $("#shaker").toggle("slow"); }, 3000);
            setTimeout(function(){
              $("#" + drinkChoice).toggle("slow"); }, 3000);
            });

      });

// I don't know buttons
$("#dontKnow").click(function() {
  $("#doIknow").toggle("slow");
  // $("#strong2").toggle("slow");
  // $("#fruity2").toggle("slow");
  // $("#refreshing2").toggle("slow");
  $("#styleChoice2").toggle("slow");
});


$("#strong2").click(function() {
    var drinkChoice = allStrong[Math.floor(Math.random() * allStrong.length)];
    console.log(drinkChoice);
    // $("#strong2").toggle("slow");
    // $("#fruity2").toggle("slow");
    // $("#refreshing2").toggle("slow");
    $("#styleChoice2").toggle("slow");
    $("#makeIt").toggle("slow");

    $("#makeIt").click(function() {
      console.log(drinkChoice)
      $("#makeIt").toggle("slow");
        $("#shaker").toggle("slow");
        setTimeout(function(){
          $("#shaker").toggle("slow"); }, 3000);
        setTimeout(function(){
          $("#" + drinkChoice).toggle("slow"); }, 3000);
  });
});

$("#fruity2").click(function() {
    var drinkChoice = allFruity[Math.floor(Math.random() * allFruity.length)];
    // $("#strong2").toggle("slow");
    // $("#fruity2").toggle("slow");
    // $("#refreshing2").toggle("slow");
    $("#styleChoice2").toggle("slow");
    $("#makeIt").toggle("slow");

    $("#makeIt").click(function() {
      console.log(drinkChoice)
      $("#makeIt").toggle("slow");
        $("#shaker").toggle("slow");
        setTimeout(function(){
          $("#shaker").toggle("slow"); }, 3000);
        setTimeout(function(){
          $("#" + drinkChoice).toggle("slow"); }, 3000);
  });
});

$("#refreshing2").click(function() {
    var drinkChoice = allRefreshing[Math.floor(Math.random() * allRefreshing.length)];
    // $("#strong2").toggle("slow");
    // $("#fruity2").toggle("slow");
    // $("#refreshing2").toggle("slow");
    $("#styleChoice2").toggle("slow");
    $("#makeIt").toggle("slow");

    $("#makeIt").click(function() {
      console.log(drinkChoice)
      $("#makeIt").toggle("slow");
        $("#shaker").toggle("slow");
        setTimeout(function(){
          $("#shaker").toggle("slow"); }, 3000);
        setTimeout(function(){
          $("#" + drinkChoice).toggle("slow"); }, 3000);
  });
});

var reset = function() {
  location.reload();
}
$("#reset").click(function() {
  reset();
});


});

// Make My Drink Button
