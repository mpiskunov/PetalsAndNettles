'use strict';
module.exports = (sequelize, DataTypes) => {
	var Review = sequelize.define("Review", {
	    type: DataTypes.STRING(),
	    date: DataTypes.DATE(),
	    description: DataTypes.STRING()
	  });

    Review.associate = function(models) {
	    models.Review.belongsTo(models.Product); // ProductId on Review Table
	  };

  return Review;


};




