// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value);
  const state = e.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        title: 'OK',
        titleColor: ' #fff',
        titleSize: '16',
        messageColor: '#fff',
        messageSize: '16',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#B51B1B',
        title: 'Error',
        titleColor: ' #fff',
        titleSize: '16',
        messageColor: '#fff',
        messageSize: '16',
      });
    });
});
