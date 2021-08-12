class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
    this.selector = selector;
    this.id = null;
    this.targetDate = targetDate;
  }

  calc = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    if (
      this.refs.secs.textContent === "00" &&
      this.refs.mins.textContent === "00" &&
      this.refs.hours.textContent === "00" &&
      this.refs.days.textContent === "00"
    ) {
      clearInterval(this.id);
      alert("YOU WIN");
    }
  };

  countStart = () => {
    this.id = setInterval(this.calc, 1000);
  };
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 14, 2021"),
});

window.addEventListener("DOMContentLoaded", timer.countStart);
const timerTarget = `До даты ${timer.targetDate}осталось:`;
document.querySelector(".timer").insertAdjacentHTML("beforebegin", timerTarget);

// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// };

// let id = null;
// let targetDate = new Date("Aug 14, 2021");

// Функция интервала---------------------------------------------------------------->
// function calc() {
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
//   refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
//   refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   refs.days.textContent = days < 10 ? `0${days}` : days;
//   if (
//     refs.secs.textContent === "00" &&
//     refs.mins.textContent === "00" &&
//     refs.hours.textContent === "00" &&
//     refs.days.textContent === "00"
//   ) {
//     clearInterval(id);
//     alert("YOU WIN");
//   }
// }

// Функция начала отсчета----------------------------------------------------------->
// function countStart() {
//   timeStart = Date.now();
//   id = setInterval(calc, 1000);
// }
