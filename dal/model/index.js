var config           = require('config').Database
var Sequelize        = require('sequelize');

// Initialize the datase connection.
sequelize = new Sequelize(
  config.name,
  config.username,
  config.password
);

// Load the models.
var models = [
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// Export the database connection.
module.exports.sequelize = sequelize;
