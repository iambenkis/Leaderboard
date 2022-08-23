const postData = (user,score) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zjli5jAyX6z7cxaxMGtk/scores/', {
        method: 'POST',
        body: JSON.stringify({
            "user": user,
            "score": score
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}
export default postData;