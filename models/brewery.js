module.exports = function(sequelize, DataTypes) {
	var breweryTable = sequelize.define("breweryTable", {
		brewerName: DataTypes.STRING,
		address: DataTypes.TEXT,
		rating: DataTypes.INTEGER

	});
	return breweryTable;
};