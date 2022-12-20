/* 
CON CONDICIONAL IF
*/
var user = "Tijera";

function game(user, machine) {
  if (user == machine) {
    console.log("Empate");
  } else {
    if (user == "Tijera" && machine == "Piedra") {
      console.log("You lose");
    } else if (user == "Tijera" && machine == "Papel") {
      console.log("You win");
    } else if (user == "Papel" && machine == "Tijera") {
      console.log("You lose");
    } else if (user == "Papel" && machine == "Piedra") {
      console.log("You win");
    } else if (user == "Piedra" && machine == "Papel") {
      console.log("You lose");
    } else {
      console.log("You win");
    }
  }
}

game();

// CON SWITCH

// var myArray = ['one', 'two', 'three', 'four', 'five'];
// var rand = Math.floor(Math.random()*myArray.length);
// var rValue = myArray[rand];
// console.log(rValue)


// intento for:


var optArray = ["Tijera", "Papel", "Piedra"];
var randOpt = Math.floor(Math.random()*optArray.length);
var machine = optArray[randOpt];
//console.log(machine);
var user = prompt("Enter your option: ");

switch (true) {
  case user == machine:
    console.log("Empate");
    break;
  case user == "Tijera" && machine == "Papel":
    console.log("You lose");
    break;
  case user == "Tijera" && machine == "Papel":
    console.log("You win");
    break;
  case user == "Papel" && machine == "Tijera":
    console.log("You lose");
    break;
  case user == "Papel" && machine == "Piedra":
    console.log("You win");
    break;
  case user == "Piedra" && machine == "Papel":
    console.log("You lose");
    break;
  case user == "Piedra" && machine == "Tijera":
    console.log("You win");
    break;
  default:
    console.log("Choose a correct OPTION");
}
