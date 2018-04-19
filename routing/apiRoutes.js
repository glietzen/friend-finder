const friends = require('../data/friends');

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });



}