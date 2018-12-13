module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		admin: DataTypes.BOOLEAN,
		ranking: DataTypes.INTEGER

	})
	return User;
};