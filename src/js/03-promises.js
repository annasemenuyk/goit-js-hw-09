import Notiflix from 'notiflix';
const formPromise = document.querySelector('.form');
formPromise.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault(event);
  const delay = Number(document.querySelector('input[name="delay"]').value);
  const step = Number(document.querySelector('input[name="step"]').value);
  const amount  = Number(document.querySelector('input[name="amount"]').value);
  
  let currentDelay = delay;

  for (let i = 1; i <= amount; i++) {
    createPromise( i,currentDelay)
    onFormSubmit.then(({ position, delay }) => {
     // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    onFormSubmit.catch(({ position, delay }) => {
     // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    currentDelay += step;
  }
} 
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
  if (shouldResolve) {
    resolve({ position, delay });// Fulfill
  } else {
    reject({ position, delay });// Reject
  }
},2000)
return createPromise
};
