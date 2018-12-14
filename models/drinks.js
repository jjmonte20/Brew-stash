module.exports = function(sequelize, DataTypes) {
	var Drinks = sequelize.define("Drinks", {
		// link brewery by brewery id in brewery table
		breweryId: DataTypes.INTEGER,
		type: DataTypes.TEXT,
		price: DataTypes.INTEGER,
		// rating: DataTypes.INTEGER

	});
	return Drinks;
};
