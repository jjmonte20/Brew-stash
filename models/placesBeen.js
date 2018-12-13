module.exports = function(sequelize, DataTypes) {
	var placesBeen = sequelize.define("placesBeen", {
		userId3: DataTypes.INTEGER,
		breweryId: DataTypes.INTEGER,
		favorite: DataTypes.BOOLEAN

	});
	return placesBeen;
};