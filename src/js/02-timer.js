import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";

flatpickr("#datetime-picker",{
  enableTime: true, //Включает сборщик времени
  time_24hr: true, //Отображает указатель времени в 24-часовом режиме без выбора AM / PM, если он включен
  defaultDate: new Date(), //Устанавливает начальную выбранную дату (даты)
  minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    dateSelected(selectedDates[0]);
},
});
const selector = document.getElementById('datetime-picker');
const startBtn = document.querySelector("[data-start]");
// const fieldBlocK = document.querySelector('.field');
const deltaTime = document.querySelector('.timer');
// const valueTime = document.querySelector('.value');
const deltaDays = document.querySelector('[data-days]');
const deltaHours = document.querySelector('[data-hours]');
const deltaMinutes = document.querySelector('[data-minutes]');
const deltaSeconds = document.querySelector('[data-seconds]');
  let intervalId = null;
  let selectedDate = null;
  const dateSelected = date => {
  selectedDate = date;
  const dateNow = new Date();
  //console.log(date.getTime());
  if (date.getTime() < dateNow.getTime()) {
    startBtn.disabled = true;
    Notiflix.Notify.warning('Please choose a date in the future');
  return;
  }
  startBtn.disabled = false;
  intervalId = setInterval(intervalDeltaTime, 1000);
  };
  const intervalDeltaTime = () => {
  const dateNow = new Date();
  if (dateNow.getTime() < selectedDate.getTime) {
  clearInterval(intervalId);
  }
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    selector.disabled = true;
     });
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  const deltaMs = selectedDate.getTime() - dateNow.getTime();
  const { days, hours, minutes, seconds } = convertMs(deltaMs);
  addLeadingZero(days, deltaDays);
  addLeadingZero(hours, deltaHours);
  addLeadingZero(minutes,deltaMinutes);
  addLeadingZero(seconds, deltaSeconds);
  };
  function addLeadingZero(value, element) {
  element.textContent = String(value).padStart(2, '0');
  }

document.body.style.textAlign ='centr';
document.body.style.boxShadow = '0 0 15px #212121';
document.body.style.borderRadius = '4%';
document.body.style.backgroundColor = '#eee';
document.body.style.width = '400px';
document.body.style.padding = '30px';
deltaTime.style.margin = '15px';



