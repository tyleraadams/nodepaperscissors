var debug = require('debug')('handler');

// Usually expects "db" as an injected dependency to manipulate the models
module.exports = function (db) {
	debug('setting up handlers...');

	return {
		renderIndex: function (req, res) {
			res.render('index');
			// res.send('choice', req.body.choice)
		},

		play: function (req, res) {
			var userChoice = req.body.choice;
			// res.send('choice: ' +  req.body.choice)
			var choices = ['node', 'paper', 'scissors'];
			console.log(userChoice)
			var computerChoice = choices[Math.floor((Math.random() * 2) + 1)];
			console.log('this is the computers\' choice ' + computerChoice )
			result = { 
						'result': match(userChoice, computerChoice),
					 	'computerChoice': computerChoice,
					 	'userChoice': userChoice
					 }
			// res.render('index', result);
			console.log(result)
			res.send(result);
		}

		
	};
};


function match(userChoice, computerChoice){
	if (userChoice === 'nodejs' ) {
		if (computerChoice === 'scissors' ) {
			return  'You won!';
		} else if( computerChoice === 'nodejs'){
			return  'Tie!';
		} else {
			return  'You lost :('
		}
	} else if (userChoice === 'scissors') {
		if (computerChoice === 'nodejs' ) {
			return 'You lost :(';
		} else if( computerChoice === 'scissors'){
			return 'Tie!';
		} else {
			return  'You won!';
		}
	} else {
		if (computerChoice === 'nodejs' ) {
			return  'You won!';
		} else if( computerChoice === 'scissors'){
			return  'You lost :(';
		} else {
			return  'Tie!'
		}
	}
}