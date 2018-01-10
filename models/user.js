'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING(),
    lastName: DataTypes.STRING(),
    address: DataTypes.STRING(),
    city: DataTypes.STRING(),
    state: DataTypes.STRING(),
    zipCode: DataTypes.STRING(),
    email: DataTypes.STRING(),
    password: DataTypes.STRING()
 	});

   User.associate = function(models) {
    models.User.hasMany(models.Review); // UserId on Review table
  };
  return User;
};