// import './style.css';
import displayScore from './modules/displayScore.js';
import postData from './modules/postToApi.js';
const form = document.querySelector('form');
displayScore();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputUser = form.querySelector('input[type = "text"]').value;
    const inputScore = form.querySelector('input[type = "number"]').value;
    console.log(inputUser)
    console.log(inputScore)
    postData(inputUser,inputScore);
    // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zjli5jAyX6z7cxaxMGtk/scores/', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         "user": inputUser,
    //         "score": inputScore
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // });
    form.reset(); 
})

//   .then((response) => response.json())
//   .then((json) => console.log(json)); 

