var debug = require('debug')('handler');

// Usually expects "db" as an injected dependency to manipulate the models
module.exports = function (db) {
	debug('setting up handlers...');

	return {
		renderIndex: function (req, res) {
			res.render('index', {title: "Node Paper Scissors"});
			// res.send('choice', req.body.choice)
		},
		play: function (req, res){
			res.send('choice: ' +  req.body.choice)
		}
	};
};
