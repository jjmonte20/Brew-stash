module.exports = function(sequelize, DataTypes) {
	var brewery_table = sequelize.define("brewery_table", {
		brewer_name: DataTypes.STRING,
		address: DataTypes.TEXT,
        // rating: DataTypes.INTEGER
	},{
        timestamps:false
    });
	return brewery_table;
};