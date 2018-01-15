//LOAD DATA
// =============================================================
// =============================================================
var friends = require("../data/friends.js");

//ROUTING
// =============================================================
// =============================================================
module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {

//SURVEY LOGIC
// =============================================================
// =============================================================

		var match = {
			name: "",
			photo: "",
			difference: 1000
		};

		var userData = req.body;
		var userScores = userData.scores;
		var totalDifference;

		for (var i = 0; i < friends.length; i ++) {
			currentFriend = friends[i];
			totalDifference = 0;

			for(var j = 0; j < currentFriend.scores.length; j++) {
				currentFriendScore = currentFriend.scores[j];
				
				currentUserScore = userScores[j];


				totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

				if (totalDifference <= match.difference) {

					match.name = currentFriend.name;
					match.photo = currentFriend.photo;
					match.difference = totalDifference;
				}
			}
		}

		friends.push(userData);

		res.json(match);

	});

};