let start = document.querySelector(".start");
let startText = document.querySelector(".text");
let play = document.querySelector(".play");
let bgm = document.getElementById("bgm");
let time = document.querySelector(".time");
let scoreDiv = document.querySelector(".score");
let score = 0;
let seconds = 0;
let generate;
let timer;

bgm.play();
bgm.volume = 0.2;

startText.onclick = () => {
  start.classList.add("hide");
  play.classList.add("show");
  createPaw();
  generate = setInterval(() => {
    createPaw();
  }, 600);
  timer = setInterval(() => {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    time.innerHTML = `Time: ${m}:${s}`;
    seconds++;
  }, 1000);
};

function createPaw() {
  const paw = document.createElement("div");
  paw.classList.add("paw");
  const { x, y } = randomLocation();
  paw.style.top = `${y}px`;
  paw.style.left = `${x}px`;
  paw.innerHTML = `<img src="../images/game-cats-hand-2.png" alt="paw" style="transform: rotate(${
    Math.random() * 360
  }deg)" />`;
  play.appendChild(paw);
  paw.addEventListener("click", catchpaw);
}

function catchpaw() {
  let music = document.getElementById("pawm");
  music.play();
  scorer();
  setTimeout(() => {
    this.remove();
    if (!document.querySelector(".paw")) {
      clearInterval(generate);
      clearInterval(timer);
      let win = document.querySelector(".win");
      win.classList.add("show");
    }
  }, 100);
}

function randomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function scorer() {
  score++;
  scoreDiv.innerHTML = `Score: ${score}`;
}
