let nums = document.querySelectorAll(".stats .num");
let spans = document.querySelectorAll(".progress span");
let statsSection = document.querySelector(".stats");
let skillsSection = document.querySelector(".our-skills");
let started = false;
let countdDownDate = new Date("Aug 17, 2023 14:0:0").getTime();
let counter = setInterval(() => {
  // Get date now
  let dateNow = new Date().getTime();
  // Find the date difference between now and countdown date
  let dateDiff = countdDownDate - dateNow;
  // Get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .info .time .unit span.days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .info .time .unit span.hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .info .time .unit span.minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .info .time .unit span.seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    document.querySelector(".events .info .title .ended").style.display =
      "inline-block";
    clearInterval(counter);
  }
}, 1000);

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
