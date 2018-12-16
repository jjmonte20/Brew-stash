module.exports = function(sequelize, DataTypes) {
	var Drinks = sequelize.define("Drinks", {
		// link brewery by brewery id in brewery table
		type: DataTypes.TEXT,
		price: DataTypes.INTEGER
		// rating: DataTypes.INTEGER

	});
	Drinks.associate = function(models) {
		Drinks.belongsTo(models.Brewery, {
			foreignKey: {
				allowNull: false
			}
		});
	}
	return Drinks;
};
