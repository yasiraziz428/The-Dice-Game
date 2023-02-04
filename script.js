const heading = document.querySelector(".heading");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const rand1 = Math.floor(Math.random() * 6 + 1);
const rand2 = Math.floor(Math.random() * 6 + 1);

img1.setAttribute("src", `./images/dice${rand1}.png`);
img2.setAttribute("src", `./images/dice${rand2}.png`);

if (rand1 > rand2) {
  heading.innerHTML = "🚩Player 1 won";
} else if (rand2 > rand1) {
  heading.innerHTML = "Player 2 won 🚩";
} else if (rand1 == rand2) {
  heading.innerHTML = "Draw";
}
