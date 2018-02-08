const Basketball = function() {
	this.intro = '篮球盛行于美国';
}

Basketball.prototype = {
	getMember: function() {
		console.log("每个队伍需要5名队员");
	},
	getBallsize: function() {
		console.log("篮球很大");
	}
}

const Football = function() {
	this.intro = '足球在世界范围内很流行';
}

Football.prototype = {
	getMember: function() {
		console.log(this);
		console.log("每个队伍需要11名队员");
	},
	getBallsize: function() {
		console.log("足球很大");
	}
}

const Tennis = function() {
	this.intro = '网球在世界范围内很流行';
}

Tennis.prototype = {
	getMember: function() {
		console.log("每个队伍需要2名队员");
	},
	getBallsize: function() {
		console.log("网球很小");
	}
}

const sportsFactory = function(name) {
	switch (name) {
		case 'NBA':
			return new Basketball();
		case 'wordcup':
			return new Football();
		case 'Frenchopen':
			return new Tennis();
	}
}

const football = sportsFactory('wordcup');
console.log(football);
console.log(football.intro);
football.getMember();