const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 3200 !== 0 && year % 400 === 0)
  );
};

const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector(".calendar");
let year = document.querySelector("#year");
let month = document.querySelector("#month");
let footer = document.querySelector(".footer");
let header_name = document.querySelector(".name");
let logo = document.querySelector(".logo");
let file = document.querySelector(".file");
let btn = document.querySelector(".btn");

const generateCalendar = (month, year) => {
  let days = document.querySelector(".days");
  days.innerHTML = "";
  let calendar_header_year = document.querySelector("#year");
  let days_of_month = [
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
  let first_day = new Date(year, month);
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");
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

let currentDate = new Date();
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());

logo.onclick = () => {
  btn.classList.remove("hide");
  calendar.classList.remove("show");
  btn.classList.add("show");
  calendar.classList.add("hide");
};

file.onclick = () => {
  btn.classList.remove("show");
  calendar.classList.remove("hide");
  btn.classList.add("hide");
  calendar.classList.add("show");
};

file.onchange = function () {
  let fileReader = new FileReader();
  let img = document.querySelector(".img");
  fileReader.readAsDataURL(this.files[0]);
  fileReader.onload = function () {
    img.src = fileReader.result;
  };
};

header_name.onclick = () => {
  const reg = /\S+/;
  let new_name = prompt('请输入您的称呼："**老师"');
  let result = true;
  do {
    if (reg.test(new_name)) {
      header_name.innerText = new_name;
      result = false;
    } else {
      new_name = prompt('૮₍ ˃ ⤙ ˂ ₎ა什么都没有收到："**老师"');
    }
  } while (result);
};

year.onclick = () => {
  const reg = /^20\d{2}$/;
  let new_year = prompt("૮(˶ᵔ ᵕ ᵔ˶)ა指定年份：20xx");
  let result = true;
  do {
    if (reg.test(new_year)) {
      year.innerText = new_year;
      generateCalendar(month.innerText - 1, new_year);
      result = false;
    } else {
      new_year = prompt("૮₍ ˃ ⤙ ˂ ₎ა打人警告：20xx");
    }
  } while (result);
};

month.onclick = () => {
  const reg = /^0?[1-9]$|^1[0-2]$/;
  let new_month = prompt("૮(˶ᵔ ᵕ ᵔ˶)ა指定月份");
  let result = true;
  do {
    if (reg.test(new_month)) {
      month.innerText = new_month;
      generateCalendar(new_month - 1, year.innerText);
      result = false;
    } else {
      new_month = prompt("૮₍ ˃ ⤙ ˂ ₎ა打人警告");
    }
  } while (result);
};
