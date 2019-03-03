const fs = require('fs');
const path = require('path');

// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// You should save your application's data inside of app/data/friends.js as an array of objects.

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json(getFriendsData());
    });

    app.post('/api/friends', (req, res) => {
        if (!validateFriendRequestBody(req.body)) {
            return res.send({ error: true });
        }
        const friend = getFriendFromRequestBody(req.body);
        addFriendToDataFile(friend);
        res.send(friend);
        // res.send(getMostCompatibleFriend(friend));
    });
};

function getFriendsData() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/friends.js'), 'utf8'));
}

function validateFriendRequestBody(requestBody) {
    if (!requestBody.name || !requestBody.name.length) return false;
    if (!requestBody.photo || !requestBody.photo.length) return false;
    if (!requestBody.scores || requestBody.scores.length !== 10) return false;
    return true;
}

function getFriendFromRequestBody(requestBody) {
    return {
        name: requestBody.name,
        photo: requestBody.photo,
        scores: requestBody.scores.map(Number),
    };
}

function addFriendToDataFile(friend) {
    const friends = getFriendsData();
    friends.push(friend);
    fs.writeFileSync(path.join(__dirname, '../data/friends.js'), JSON.stringify(friends, null, 4));
}
