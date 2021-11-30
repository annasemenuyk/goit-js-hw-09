import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";
import Notiflix from 'notiflix';
const selector = document.getElementById('datetime-picker')
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;
//console.log(date.getTime());
flatpickr("#datetime-picker",{
  enableTime: true, //Включает сборщик времени
  time_24hr: true, //Отображает указатель времени в 24-часовом режиме без выбора AM / PM, если он включен
  defaultDate: new Date(), //Устанавливает начальную выбранную дату (даты)
  minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
  onClose(selectedDates) {
    const currentTime = Date.now()
   if (selectedDates < currentTime){
   return window.alert(`"Please choose a date in the future"`);
   }
   startBtn.disabled = false;
  }
})

  //     const targetDate = targetDate;
  //     const selector = document.querySelector('.field');
  //     const deltaTime = document.querySelector('.value');
  //     const deltadays = document.querySelector('[data-days]');
  //     const deltahours = document.querySelector('[data-hours]');
  //     const deltaminutes = document.querySelector('[data-minutes]');
  //     const deltaseconds = document.querySelector('[data-seconds]');
  //     const deltastartBtn = document.querySelector('[data-start]');
  //     convertMs(ms) {
  //       // Number of milliseconds per unit of time
  //       const second = 1000;
  //       const minute = second * 60;
  //       const hour = minute * 60;
  //       const day = hour * 24;
  //         // Remaining days
  //       const days = pad(Math.floor(ms / day));
  //       // Remaining hours
  //       const hours = pad(Math.floor((ms % day) / hour));
  //       // Remaining minutes
  //       const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  //       // Remaining seconds
  //       const seconds = pad( Math.floor((((ms % day) % hour) % minute) / second));
  //         return ({ days, hours, minutes, seconds }).padStart(2, '0');
  //     }
  function start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            console.log('deltatime', deltaTime)

            const time = convertMs(deltaTime);
            selectedDates(ms);
        },
        1000)
    }

  
    
