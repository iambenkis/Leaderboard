import './style.css';
import displayScore from './modules/displayScore.js';
import postData from './modules/postToApi.js';

const form = document.querySelector('form');
const refresh = document.querySelector('.refresh');
displayScore();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputUser = form.querySelector('input[type = "text"]').value;
  const inputScore = form.querySelector('input[type = "number"]').value;
  postData(inputUser, inputScore);
  form.reset();
});

refresh.addEventListener('click', () => {
  window.location.reload();
});
