var rand1 = Math.random();
rand1 = rand1 * 6 + 1;
rand1 = Math.floor(rand1);
console.log(rand1);

if (rand1 === 1) {
  document.querySelector("#img1").src = "./dice1.png";
} else if (rand1 === 2) {
  document.querySelector("#img1").src = "./dice2.png";
} else if (rand1 === 3) {
  document.querySelector("#img1").src = "./dice3.png";
} else if (rand1 === 4) {
  document.querySelector("#img1").src = "./dice4.png";
} else if (rand1 === 5) {
  document.querySelector("#img1").src = "./dice5.png";
} else if (rand1 === 6) {
  document.querySelector("#img1").src = "./dice6.png";
}

var rand2 = Math.random();
rand2 = rand2 * 6 + 1;
rand2 = Math.floor(rand2);
console.log(rand2);

if (rand2 === 1) {
  document.querySelector("#img2").src = "./dice1.png";
} else if (rand2 === 2) {
  document.querySelector("#img2").src = "./dice2.png";
} else if (rand2 === 3) {
  document.querySelector("#img2").src = "./dice3.png";
} else if (rand2 === 4) {
  document.querySelector("#img2").src = "./dice4.png";
} else if (rand2 === 5) {
  document.querySelector("#img2").src = "./dice5.png";
} else if (rand2 === 6) {
  document.querySelector("#img2").src = "./dice6.png";
}

if (rand1 > rand2) {
  document.querySelector("#t1").innerHTML = "Player 1 Wins 🚩";
} else if (rand2 > rand1) {
  document.querySelector("#t1").innerHTML = "Player 2 Wins 🚩";
} else if (rand1 === rand2) {
  document.querySelector("#t1").innerHTML = "Draw 🏳️";
}
