import getScore from './scores.js';
import htmlTemplate from './htmlTemplate.js';

const scoreContainer = document.querySelector('.score-container');
const scores = await getScore();
const displayScore = () => { 
    scores.forEach((score) => {
        scoreContainer.insertAdjacentHTML('afterbegin', htmlTemplate(score)); 
    });
};

export default displayScore;
