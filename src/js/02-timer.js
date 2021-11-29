import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputDate = document.getElementById('datetime-picker')
const date = new Date();
console.log(date.getTime());
 inputDate.addEventListener('input', selectedFutureDate,convertMs)
 flatpickr(selector, options)
 const options = {
  enableTime: true, //Включает сборщик времени
  time_24hr: true, //Отображает указатель времени в 24-часовом режиме без выбора AM / PM, если он включен
  defaultDate: new Date(), //Устанавливает начальную выбранную дату (даты)
  minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
}
function selectedFutureDate (){
  let flatpickrOptions = {};
  return flatpickrOptions;
}
  inputDate.addEventListener('input',onClose)
  function onClose(selectedDates) {
    console.log(selectedDates[0]);
  };
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