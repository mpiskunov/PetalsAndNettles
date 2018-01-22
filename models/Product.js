'use strict';
module.exports = (sequelize, DataTypes) => {
	var Product = sequelize.define("Product", {
	    name: DataTypes.STRING(),
	    imgSrc: DataTypes.STRING(),
	    skuNumber: DataTypes.STRING(),
	    description: DataTypes.TEXT()
 	});
  return Product;
};
