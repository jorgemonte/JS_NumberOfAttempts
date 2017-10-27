var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper){
  return Math.floor( Math.random() * upper)
}

while(guess !== randomNumber){
      guess = getRandomNumber (upper);
  attempts += 1;
}

document.getElementById("info1").innerHTML =  randomNumber;
document.getElementById("info2").innerHTML =  attempts;