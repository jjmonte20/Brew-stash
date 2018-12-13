module.exports = function(sequelize, DataTypes) {
	var placesBeen = sequelize.define("placesBeen", {
		// link user from user.js by id in user.js
		user_id: DataTypes.INTEGER,
		brewery_id: DataTypes.INTEGER,
		// favorite: DataTypes.BOOLEAN

	});
	return placesBeen;
};