let start = document.querySelector(".start");
let startText = document.querySelector(".text");
let play = document.querySelector(".play");
let bgm = document.getElementById("bgm");

bgm.volume = 0.3;

startText.onclick = () => {
  start.classList.add("hide");
  play.classList.add("show");
  createPaw();
};

function createPaw() {
  const paw = document.createElement("div");
  paw.classList.add("paw");
  const { x, y } = randomLocation();
  paw.style.top = `${y}px`;
  paw.style.left = `${x}px`;
  paw.innerHTML = `<img src="../images/game-cats-hand-2.png" alt="paw" style="transform: rotate(${Math.random() * 360}deg)" />`;
  paw.addEventListener("click", catchpaw);
  play.appendChild(paw);
}

function catchpaw() {
  let music = document.getElementById("pawm");
  music.play();
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 100);
  addPaw();
}

function addPaw() {
  setTimeout(createPaw, 800);
  setTimeout(createPaw, 1500);
}

function randomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function increaseScore() {
  let score = document.querySelector(".score");
  score++;
  score.innerHTML = `Score: ${score}`;
}
