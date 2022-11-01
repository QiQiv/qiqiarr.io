let nav = document.querySelectorAll(".nav-list");
let calendar = document.querySelector(".calendar");
let game = document.querySelector(".game");
let resume = document.querySelector(".resume");
let btn = document.querySelectorAll(".btn");
let cover = document.querySelectorAll(".cover");
let form = document.querySelector("#form");
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");

for (let i = 0; i < nav.length; i++) {
  nav[i].onmouseover = function () {
    coverShow(i);
    nav[i].classList.add("mouseover");
    nav[i].classList.remove("mouseout");
  };
  nav[i].onmouseout = function () {
    coverHide(i);
    nav[i].classList.add("mouseout");
    nav[i].classList.remove("mouseover");
  };
}

resume.onclick = () => {
  const url = "./pages/resume.html";
  verify(url);
};
calendar.onclick = () => {
  const url = "./pages/calendar.html";
  verify(url);
};
game.onclick = () => {
  setTimeout(() => {
    window.location.href = "./pages/game.html";
  }, 300);
};

function verify(url) {
  form.classList.add("show");
  console.log("verify");
  submit.onclick = (e) => {
    let password = document.querySelector(".pw");
    if (password.value == 77) {
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    } else {
      let error = document.querySelector("#error");
      form.classList.remove("show");
      error.classList.add("show");
      setTimeout(() => {
        error.classList.remove("show");
      }, 1200);
    }
    return false;
  };
  reset.onclick = () => {
    console.log("verify reset");
    form.classList.remove("show");
  };
}

function coverHide(i) {
  cover[i].classList.add("hide");
  cover[i].classList.remove("show");
}
function coverShow(i) {
  cover[i].classList.add("show");
  cover[i].classList.remove("hide");
}
