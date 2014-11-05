var cluster          = require('cluster');
var config           = require('config').Server
var express          = require('express'),
    expressValidator = require('express-validator');
var util             = require('util');

exports.startExpressServer = function() {
	// Setup the express application and corresponding routes.
	var app = express();

	app.configure(function () {
			app.use(express.compress()); // Enable gzip compression.
			app.use(expressValidator);
			app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
			app.use(express.bodyParser());
			app.use(app.router);

			// Import application modules.
			app.set('model', require('./dal/model'));
	});

	// Enable static content serving.
	app.use('/', express.static(__dirname + '/static'));

	app.listen(config.port);
	console.log('Cluster worker %s listening on %d...', cluster.worker.id, config.port)
};
