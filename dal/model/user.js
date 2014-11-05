var passwordHash     = require('password-hash');
var Sequelize        = require('sequelize');

var User = Sequelize.define('User', {
  email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
  },
	password: {
		type: Sequelize.STRING,
		/*validate: {
			isPasswordHash: function(value) {
        return passwordHash.isHashed((value);
			}
		}*/
	},
	giveName: {
		type: Sequelize.STRING
	},
	surname: {
		type: Sequelize.STRING
	}
});
