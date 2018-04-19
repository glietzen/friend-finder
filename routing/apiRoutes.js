const friendsArrary = require('../data/friends');

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        return res.json(friendsArrary);
    });

    app.post("/api/friends", (req, res) => {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;

        for (var i = 0; i < friendsArrary.friendsArrary.length; i++) {
            var currentFriend = friendsArrary.friendsArrary[i];
            totalDifference = 0;

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        
        friendsArrary.friendsArrary.push(userData);

        res.json(bestMatch);
    })


}