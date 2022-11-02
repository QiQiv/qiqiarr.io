const calendar = document.querySelector(".calendar");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const footer = document.querySelector(".footer");
const header_name = document.querySelector(".name");
const logo = document.querySelector(".logo");
const file = document.querySelector(".file");
const btn = document.querySelector(".btn");
const monthList = document.querySelector("#month-list");
const yearList = document.querySelector("#year-list");

const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 3200 !== 0 && year % 400 === 0)
  );
};

const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

const generateCalendar = (month, year) => {
  const days = document.querySelector(".days");
  days.innerHTML = "";
  const calendar_header_year = document.querySelector("#year");
  const days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const first_day = new Date(year, month);
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    const day = document.createElement("div");
    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;
    } else {
      day.classList.add("blank");
    }
    days.appendChild(day);
    day.onclick = () => {
      if (!day.classList.contains("blank")) {
        day.classList.toggle("choose");
      }
    };
  }
};

const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
year.innerText = currentYear;
month.innerText = currentMonth + 1;
generateCalendar(currentMonth, currentYear);

const readme = document.querySelector("#readme");
const text = document.querySelector("#readme-text");

readme.onclick = () => {
  if (text.classList.contains("hide")) {
    readmeShow();
  } else {
    calendarShow();
  }
};

logo.onclick = () => {
  calendarShow()
  btn.classList.remove("hide");
  btn.classList.add("show");
};

file.onchange = function () {
  btn.classList.remove("show");
  btn.classList.add("hide");
  const fileReader = new FileReader();
  const img = document.querySelector(".img");
  fileReader.readAsDataURL(this.files[0]);
  fileReader.onload = function () {
    img.src = fileReader.result;
  };
};

header_name.onclick = () => {
  calendarShow()
  preText = header_name.innerText;
  header_name.innerText = "";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.placeholder = "输入您的称呼";
  header_name.appendChild(input);
  input.focus();
  input.onblur = () => {
    verify(input);
  };
  input.addEventListener("keyup", (e) => {
    let key = e.which || e.keyCode;
    if (key == 13) {
      verify(input);
    }
  });
  function verify(e) {
    if (e.value) {
      header_name.innerText = e.value;
    } else {
      header_name.innerText = preText;
    }
  }
};

year.onclick = () => {
  yearListShow();
  const perYear = document.querySelector("#year-pre");
  const nextYear = document.querySelector("#year-next");
  perYear.onclick = () => {
    currentYear--;
    changeYear(currentYear);
  };
  nextYear.onclick = () => {
    currentYear++;
    changeYear(currentYear);
  };
  function changeYear(y) {
    year.innerText = y;
    generateCalendar(month.innerText - 1, y);
    calendarShow();
  }
};

month.onclick = () => {
  if (monthList.innerHTML == "") {
    getList(monthList, currentMonth);
  }
  monthListShow();
};

function getList(e, m) {
  for (let i = 1; i < 13; i++) {
    const div = document.createElement("h2");
    div.innerText = i;
    e.appendChild(div);
    div.onclick = () => {
      monthListHide();
      monthList.innerHTML = "";
      month.innerText = i;
      calendarShow();
      generateCalendar(i - 1, currentYear);
    };
  }
}

function calendarShow() {
  calendar.classList.remove("hide");
  calendar.classList.add("show");
  monthListHide();
  yearListHide();
  readmeHide();
}
function calendarHide() {
  calendar.classList.remove("show");
  calendar.classList.add("hide");
}
function monthListShow() {
  readmeHide();
  calendarHide()
  yearListHide()
  monthList.classList.remove("hide");
  monthList.classList.add("show");
}
function monthListHide() {
  monthList.classList.remove("show");
  monthList.classList.add("hide");
}
function yearListShow() {
  calendarHide();
  readmeHide();
  monthListHide()
  yearList.classList.remove("hide");
  yearList.classList.add("show");
}
function yearListHide() {
  yearList.classList.remove("show");
  yearList.classList.add("hide");
}
function readmeShow() {
  text.classList.remove("hide");
  text.classList.add("show");
  monthListHide()
  yearListHide()
  calendarHide()
}
function readmeHide() {
  text.classList.add("hide");
  text.classList.remove("show");
}
