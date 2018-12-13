module.exports = function(sequelize, DataTypes) {
	var placesBeen = sequelize.define("placesBeen", {
		user_id: DataTypes.INTEGER,
		brewery_id: DataTypes.INTEGER,
		favorite: DataTypes.BOOLEAN

	});
	return placesBeen;
};