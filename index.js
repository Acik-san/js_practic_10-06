const secretNumber = "2109";
let TRY = 1;

while (true) {
  const number = prompt("Guess secret number:");
  if (number === secretNumber) {
    console.log("You guessed the secret number!");
    console.log("Tries: " + TRY);
    break;
  }
  if(number < secretNumber){
    TRY++;
    console.log('Secret number is more than entered number!')
    console.log("Try again:");
    continue
  }
  if(number > secretNumber){
    TRY++;
    console.log('Secret number is less than entered number!')
    console.log("Try again:");
    continue
  }
}
