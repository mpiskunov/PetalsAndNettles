'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING(),
    // lastName: DataTypes.STRING(),
    // address: DataTypes.STRING(),
    // state: DataTypes.STRING(),
    // zipCode: DataTypes.STRING(),
    // email: DataTypes.STRING(),
    // password: DataTypes.STRING()
 	});
  return User;
};
//Product = sequelize.define("Product", {
//     name: Sequelize.STRING(),
//     skuNumber: Sequelize.STRING(),
//     description: Sequelize.TEXT()
// });

// var Order = sequelize.define("Order", {
//     number: Sequelize.INTEGER,
//     date: Sequelize.DATE(),
//   });

// var Review = sequelize.define("Review", {
//     type: Sequelize.STRING(),
//     date: Sequelize.DATE(),
//     description: Sequelize.STRING()
//   });
