var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
	var BrewMaster = sequelize.define("BrewMaster", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},	
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	// Creating a custom method for our model
	// if the brewmaster is an admin give them the ability to associate with a brewery
	// if (BrewMaster.admin === true){
   
	// }

	return BrewMaster;
};