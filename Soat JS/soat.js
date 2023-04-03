const hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secundHand = document.querySelector(".second");

// function setClock() {
//     const currenDate = new Date(),
//       const currentsecond = currenDate.getSeconds() / 60
//     currentHour = currenDate.getHours(),
//     currentminute = (currentsecond + currenDate.getMinutes()) / 12,
//     currentHour = (currentMinute + currenDate.getSeconds()) / 12;

//   setRotation(hourHand, currentHour);
//   setRotation(minuteHand, currentMinute);
//   setRotation(secundHand, currentsecond);
// }


function setClock() {
  let currenDate = new Date();
  let currentSecond = currenDate.getSeconds() / 60;
  let currentMinute = (currentSecond + currenDate.getMinutes()) / 60;
  let currentHour = (currentMinute + currenDate.getHours()) / 12;

    setRotation(hourHand, currentHour);
    setRotation(minuteHand, currentMinute);
    setRotation(secundHand, currentSecond);
}
function setRotation(a, b) {
  a.style.setProperty("--rotation", b * 360);
}

setInterval(() => {
  setClock();
}, 1000);