let nav = document.querySelectorAll(".nav-list");
let calendar = document.querySelector(".calendar");
let game = document.querySelector(".game");
let btn = document.querySelectorAll(".btn");

for (let i = 0; i < nav.length; i++) {
  nav[i].onmouseover = function () {
    btn[i].classList.add("show");
    btn[i].classList.remove("hide");
    nav[i].classList.add("mouseover");
    nav[i].classList.remove("mouseout");
  };
  nav[i].onmouseout = function () {
    btn[i].classList.add("hide");
    btn[i].classList.remove("show");
    nav[i].classList.add("mouseout");
    nav[i].classList.remove("mouseover");
  };
}

calendar.onclick = (e) => {
  setTimeout(()=>{
    window.location.href = "./pages/calendar.html";
  },1200)
};
game.onclick =()=>{
  setTimeout(()=>{
    window.location.href = "./pages/game.html";
  },1200)
}
