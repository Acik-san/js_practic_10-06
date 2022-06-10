const secretNumber = 2109;
let TRY = 1;

while (true) {
  const number = prompt("Guess secret number:");
  if (number === "" || number === null || isNaN(Number(number)) || number < 0) {
    console.log("Error! Enter correct number.");
  } else if (Number(number) === secretNumber) {
    console.log("You guessed the secret number!");
    console.log("Tries: " + TRY);
    break;
  } else if (Number(number) < secretNumber) {
    TRY++;
    console.log("Secret number is more than entered number!");
    console.log("Try again:");
    continue;
  } else if (Number(number) > secretNumber) {
    TRY++;
    console.log("Secret number is less than entered number!");
    console.log("Try again:");
    continue;
  }
}
