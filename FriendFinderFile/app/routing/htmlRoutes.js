app.get('/survey', displaySurvey);

function displaySurvey(req, res) {
    res.send('survey.html');
}