module.exports = function(sequelize, DataTypes) {
	var drinksDrunk = sequelize.define("drinksDrunk", {
		// link user from user.js
		userId2: DataTypes.INTEGER,
		drinksId: DataTypes.INTEGER,
		// favorite: DataTypes.BOOLEAN

	});
	return drinksDrunk;
};