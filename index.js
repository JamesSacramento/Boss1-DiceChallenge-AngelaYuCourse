function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  var randomNumber1 = getRandomNumber();
  var randomNumber2 = getRandomNumber();

  var diceImage1 = "./images/dice" + randomNumber1 + ".png";
  var diceImage2 = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", diceImage1);
  document.querySelector(".img2").setAttribute("src", diceImage2);

  // Determine the winner and update the title with a celebration emoji
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
    showConfetti();
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
    showConfetti();
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
    hideConfetti();
  }
}

// Function to show confetti
function showConfetti() {
  document.getElementById('confetti').style.display = 'flex';
}

// Function to hide confetti
function hideConfetti() {
  document.getElementById('confetti').style.display = 'none';
}

// Roll the dice when the page loads
window.onload = rollDice;
