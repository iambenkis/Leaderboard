const getScore = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zjli5jAyX6z7cxaxMGtk/scores/');
    let scores = [];
    scores = await response.json();
    return scores.result;
}
export default getScore;