const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

let id = null;
let targetDate = new Date("Aug 14, 2021");

// Вешаем на винду слушателя чтоб сразу запускался таймер-------------------------->
window.addEventListener("DOMContentLoaded", countStart);

// Функция интервала---------------------------------------------------------------->
function calc() {
  const currentDate = Date.now();
  const time = targetDate - currentDate;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
  refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
  refs.days.textContent = days < 10 ? `0${days}` : days;
  if (
    refs.secs.textContent === "00" &&
    refs.mins.textContent === "00" &&
    refs.hours.textContent === "00" &&
    refs.days.textContent === "00"
  ) {
    clearInterval(id);
    alert("YOU WIN");
  }
}

// Функция начала отсчета----------------------------------------------------------->
function countStart() {
  timeStart = Date.now();
  id = setInterval(calc, 1000);
}
