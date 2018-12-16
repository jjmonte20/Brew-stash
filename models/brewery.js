module.exports = function(sequelize, DataTypes) {
	var Brewery = sequelize.define("Brewery", {
		brewer_name: DataTypes.STRING,
		address: DataTypes.TEXT,
		// rating: DataTypes.INTEGER
	},{
		timestamps:false
	});

	// need to associate user with a brewery
	// brewery cannot be created without a user
	Brewery.associate = function(models) {
		// brewery cannot bet created without an author
		Brewery.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});

		Brewery.hasMany(models.Drinks,{
			onDelete: "cascade"
		});		
	};
	// making an association where brewery can have many drinks
	// drink cannot be created with having a brewery associated with it
	
	return Brewery;
};