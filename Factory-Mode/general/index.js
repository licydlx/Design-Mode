// const Basketball = function() {
// 	this.intro = '篮球盛行于美国';
// }

// Basketball.prototype = {
// 	getMember: function() {
// 		console.log("每个队伍需要5名队员");
// 	},
// 	getBallsize: function() {
// 		console.log("篮球很大");
// 	}
// }

// const Football = function() {
// 	this.intro = '足球在世界范围内很流行';
// }

// Football.prototype = {
// 	getMember: function() {
// 		console.log(this);
// 		console.log("每个队伍需要11名队员");
// 	},
// 	getBallsize: function() {
// 		console.log("足球很大");
// 	}
// }

// const Tennis = function() {
// 	this.intro = '网球在世界范围内很流行';
// }

// Tennis.prototype = {
// 	getMember: function() {
// 		console.log("每个队伍需要2名队员");
// 	},
// 	getBallsize: function() {
// 		console.log("网球很小");
// 	}
// }

// const sportsFactory = function(name) {
// 	switch (name) {
// 		case 'NBA':
// 			return new Basketball();
// 		case 'wordcup':
// 			return new Football();
// 		case 'Frenchopen':
// 			return new Tennis();
// 	}
// }

// const football = sportsFactory('wordcup');

const sportsFactory = function(type, content) {
	if (this instanceof sportsFactory) {
		let s = new this[type](content);
		return s;
	} else {
		return new sportsFactory(type, content);
	};
}

sportsFactory.prototype = {
	Basketball:function(content){
		console.log(content);
	},
	Football:function(content){
		console.log(content);
	}
}

const data = [{
	type: 'Basketball',
	content: '我是篮球'
}, {
	type: 'Football',
	content: '我是足球'
}];

for (let i = 0; i < data.length; i++) {
	console.log(sportsFactory(data[i].type,data[i].content));
	
};
