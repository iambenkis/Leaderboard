import scores from './scores.js';
import htmlTemplate from './htmlTemplate.js';

const scoreContainer = document.querySelector('.score-container');

const displayScore = () => {
  scores.forEach((score) => {
    scoreContainer.insertAdjacentHTML('afterbegin', htmlTemplate(score));
  });
};

export default displayScore;
