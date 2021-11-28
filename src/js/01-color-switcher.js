const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const bodyColor = document.querySelector('body')
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
let intervalId = null;
  const setBackgroundColor = () => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    console.log(setBackgroundColor);
  }
  
  const onStartBtnPress = () => {
    intervalId = setInterval(() => {
    setBackgroundColor()
  },
      1000)
    
    startBtn.disabled = true;
  }

  const onStopBtnPress = () => {
   // console.log('stop')
    clearInterval(intervalId);
    startBtn.disabled = false;
  }
startBtn.addEventListener('click', onStartBtnPress);
stopBtn.addEventListener('click', onStopBtnPress);

    


