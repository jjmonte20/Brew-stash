module.exports = function(sequelize, DataTypes) {
	var Drinks = sequelize.define("Drinks", {
		breweryId: DataTypes.INTEGER,
		type: DataTypes.TEXT,
		price: DataTypes.INTEGER,
		rating: DataTypes.INTEGER

	});
	return Drinks;
};
