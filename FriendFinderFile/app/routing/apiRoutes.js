// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// You should save your application's data inside of app/data/friends.js as an array of objects.
var friendsData = require('app/data/friends.js');

module.exports = function (app) {


    app.get('/app/friends', function (req, res) {
        res.json(tableData);
    });


    app.post('/app/friends', function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            friendsData.push(req.body);
            res.json(false);
        }
    })
}