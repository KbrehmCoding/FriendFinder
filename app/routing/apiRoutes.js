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
        // this post is supposed to take the information from the users survey answers and store them in the friends.js file in the data folder
        // it is also supposed to do the math to compare the users survey answers to the ones already stored in the friends.js file
        // guessing this is where the math logic will need to go when calculating the most compatible friends
        const friends = getFriendsData();
        const compatibleFriend = calculateFriendCompatibility(friends);
        addFriendToDataFile(friends);
        res.send(compatibleFriend);
    });
};

function getFriendsData() {
    return require('../data/friends');
}

function calculateFriendCompatibility(friends) {
    var userData = req.body;
    var mostCompatible = "";
    var userScore = userData.scores;
    var friendScore = "";
    var difference = userScore[i] - friendScore[i];
    var totalDifference = "";

    for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        totalDifference = 0;
        // TODO: loop through friends a compare user scores
        // I might actually need an if than statement to do the math on each question before moving onto the next friend
        // This is not the final solution, just working it out
        //I need to take the difference between the scores for each question
        //then add all the differences togther to get the final compatibibity score for that friend
        for (var i = 0; i < friends.length; i++) {
            totalDifference += Math.abs(parseInt(UserScore) - parseInt(friendScore));
        }
        if (totalDifference <= mostCompatible.difference) {
            mostCompatible.name = currentFriend.name;
            mostCompatible.image = currentFriend.image;
            mostCompatible.difference = totalDifference;
        }
    }
    // compare the differnece with mostCompatible, if totalDiffenrence is smaller then it becomes the new mostCompatible vlaue
    // need a way to store the score with the name of the friend
    // TODO: return most compatible friend
    return friends[0];
}

function addFriendToDataFile(friend) {
    // TODO: load data, update data, and save data to the friend.js file
}

// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.
