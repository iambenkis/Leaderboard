const postData = (user,score) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jimsa5KtKCwfICVDsBiC/scores/', {
        method: 'POST',
        body: JSON.stringify({
            "user": user,
            "score": score
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}
export default postData;