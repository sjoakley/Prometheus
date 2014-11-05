// Set NODE_ENV to production if not explicitly set.
if (!process.env['NODE_ENV']) {
	process.env['NODE_ENV'] = 'production';
	console.log('NODE_ENV = %s', process.env['NODE_ENV']);
}

var cluster          = require('cluster');
var config           = require('config').Server

if (cluster.isMaster) {
	var processes = config.processes;
	if (!processes) {
		// Count the machine's CPUs.
		processes = require('os').cpus().length;
	}

	// Fork the desired number of worker processes.
	for (var i = 0; i < processes; ++i) {
		cluster.fork();
	}
} else {
	var worker = require('./worker');
	worker.startExpressServer();
}

// Listen for dying workers
cluster.on('exit', function (worker) {

    // Replace the dead worker.
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();
});
