
// Game of rock paper scissors

var player1 = prompt("What's yo name?");
var wins1 = 0;
var puterwins = 0;
var weapons = ['rock' , 'paper', 'scissors'];

console.log("test");

while (wins1 < 3 && puterwins < 3) {

  var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
  var userweapon = prompt("choose your weapon!");

// Determine CPU weapon
  if (weaponOfChoice > 0 && weaponOfChoice < .33) {
      weaponOfChoice = "rock";
  }
  else if (weaponOfChoice > .34 && weaponOfChoice < .66) {
      weaponOfChoice = "paper";
  }
  else {
      weaponOfChoice = "scissors";
  }
// End CPU Weapon

// Game Referee
  if (weaponOfChoice = "rock" && userweapon = "rock") {
    console.log("tie game sucka!");
  }
  else if (weaponOfChoice = "rock" && userweapon = "scissors") {
    console.log("U R WINRAR!");
    wins1 = wins1++;
  }
  else if (weaponOfChoice = "rock" && userweapon = "paper") {
    console.log("U DUN GOOFED!");
    puterwins = puterwins++;
  }
  else if (weaponOfChoice = "paper" && userweapon = "scissors") {
    console.log("U R WINRAR!");
    wins1 = wins1++;
  }
  else if (weaponOfChoice = "paper" && userweapon = "paper") {
    console.log("tie game sucka!");
  }
    else if (weaponOfChoice = "paper" && userweapon = "rock") {
      console.log("U DUN GOOFED!");
  }
  else if (weaponOfChoice = "scissors" && userweapon = "scissors") {
    console.log("tie game sucka!");
  }
  else if (weaponOfChoice = "scissors" && userweapon = "rock") {
    console.log("U R WINRAR!");
    wins1 = wins1++;
  }
  else if (weaponOfChoice = "scissors" && userweapon = "paper") {
    console.log("U DUN GOOFED!");
    puterwins = puterwins++;
  }
  else if (userweapon = "shotgun") {
    console.log("U R WINRAR!");
    wins1 = wins1++;
  }
// End Game Referee
}

console.log("GAME OVER");
console.log(player1": "wins1);
console.log("CPU: "puterwins);

if (wins1 > puterwins) {
  console.log(player1 "is the wiener");
}
else {
  console.log("CPU: is the wiener");
}
