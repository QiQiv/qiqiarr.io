:root {
  --light-border: rgba(0, 0, 0, 0.4);
  --bgc-purple: #d4d3ff;
  --bgc-pink: #fbc7d4;
  --shadow: 2px 5px 10px rgba(85, 85, 85, 0.3);
  /* --shadow-s: 2px 2px 5px rgba(85, 85, 85, 0.2); */
  --font-family: consolas;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html {
  font-size: 12px;
  font-family: var(--font-family);
  width: 100vw;
  height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../images/resume-bg1.jpg') no-repeat;
  background-size: cover;
}
.logo {
  position: relative;
  width: 100px;
  height: 100px;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  box-shadow: var(--shadow);
  animation: show-flowdown 1s forwards;
  overflow: hidden;
}
.img {
  width: 100%;
  line-height: 50px;
  display: inline-block;
  font-size: 11px;
  align-items: center;
  cursor: pointer;
}
.btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  color: #ffffff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.4);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}
.btn.show {
  opacity: 1;
  z-index: 99;
  transition: all 1s ease-in-out;
}
.btn.hide {
  opacity: 0;
  z-index: -99;
  transition: all 1s ease-in-out;
}
.file {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99;
  cursor: pointer;
  opacity: 0;
}
.pseudo-style {
  position: relative;
  top: -50px;
  font-size: 14px;
  text-align: center;
}
.header {
  margin: 35px 0;
  color: rgba(0, 0, 0, 0.8);
  animation: show-flowdown 1s forwards;
}
.name {
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  text-align: center;
  border-bottom: var(--light-border) 2px solid;
}
.title {
  margin-top: 5px;
  position: relative;
}
#year,
#month {
  text-align: center;
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow);
}
#year{
  display: inline-block;
  width: 60px;
}
#month{
  display: inline-block;
  width: 40px;
}
.inline{
  display: inline-block;
  position: relative;
}
#month-list,
#year-list{
  position: absolute;
  text-align: center;
  margin-top: 5px;
  padding: 2px 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow);
  overflow: hidden;
}
#month-list {
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  font-size: 12px;
  width: 40px;
}
#month-list.hide {
  animation: hide-eraser 1s forwards;
}
#month-list.show {
  animation: show-eraser 1s forwards;
}
#month-list h2:hover,
#year-list span:hover {
  cursor: pointer;
  color: #a981dd;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}
#year-list{
  font-size: 18px;
  font-weight: bold;
  width: 60px;
  cursor: pointer;
}
#year-list.hide{
  opacity: 0;
  transition: all 1s ease-in-out;
}
#year-list.show {
  opacity: 1;
  transition: all 1s ease-in-out;
}
.calendar {
  height: max-content;
  width: 330px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  overflow: hidden;
  padding: 20px 20px;
  box-shadow: var(--shadow);
  animation: show-flowdown 1s forwards;
}
.calendar.hide {
  animation: hide-flowdown 1s forwards;
}
.calendar.show {
  animation: show-flowdown 1s forwards;
}
.week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 600;
  padding: 8px 0;
  border-bottom: var(--light-border) 1px solid;
}
.week-days div {
  display: grid;
  place-items: center;
  color: rgba(0, 0, 0, 0.7);
}
.days {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  color: rgba(0, 0, 0, 0.6);
}
.days div {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
}
.days div.choose {
  text-align: center;
  color: #fff;
  background-color: rgba(62, 22, 155, 0.3);
}
.days div.choose::after {
  content: "\A休\A息";
  font-size: 11px;
}
@keyframes show-flowdown {
  0% {
    transform: translateY(-5%);
    opacity: 0;
    z-index: -99;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    z-index: 99;
  }
}
@keyframes hide-flowdown {
  0% {
    transform: translateY(0);
    opacity: 1;
    z-index: 99;
  }
  100% {
    transform: translateY(5%);
    opacity: 0;
    z-index: -99;
  }
}
@keyframes hide-eraser {
  0% {
    height: 100%;
    opacity: 1;
    z-index: 99;
  }
  100% {
    height: 0;
    opacity: 0;
    z-index: -99;
  }
}
@keyframes show-eraser {
  0% {
    height: 0;
    opacity: 0;
    z-index: -99;
  }
  100% {
    height: 1200%;
    opacity: 1;
    z-index: 99;
  }
}
.box{
  position: relative;
}
#readme-text{
  position: absolute;
  top: 0;
  width: 330px;
  height: max-content;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
  overflow: hidden;
}
#readme-text.hide{
  opacity: 0;
  z-index: -99;
  transition: all .5s ease-in-out;
}
#readme-text.show{
  opacity: 1;
  z-index: 199;
  transition: all .5s ease-in-out;
}
.bold{
  margin: 4px 0;
  font-weight: bold;
}
#readme{
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  width: 80px;
  text-align: center;
  margin: 60px auto 0;
  padding: 5px 15px;
  border-radius: 20px;
  box-shadow: var(--shadow);
}
