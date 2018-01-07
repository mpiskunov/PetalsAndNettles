'use strict';
module.exports = (sequelize, DataTypes) => {
	var Order = sequelize.define("Order", {
	    number: DataTypes.INTEGER,
	    date: DataTypes.DATE(),
	  });

	Order.associate = function(models) {
	    models.Order.belongsTo(models.User); // UserId on Order table
	  };
  return Order;
};
