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
		var userScore = userData.scores;
		var totalDifference = 0;

		for (var i = 0; i < friends.length; i ++) {

			totalDifference = 0;

			for(var j = 0; j < friends[i].scores[j]; j++) {

				totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

				if (totalDifference <= match.difference) {

					match.name = friends[i].name;
					match.photo = friends[i].photo;
					match.difference = totalDifference;
				}
			}
		}

		friends.push(userData);

		res.json(match);

	});

};