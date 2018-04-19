const friendsArrary = require('../data/friends');

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        return res.json(friendsArrary);
    });

    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        console.log(newFriend);
        console.log(friendsArrary);
        friendsArrary.friendsArrary.push(newFriend);
        return res.json(friendsArrary);
    })



}