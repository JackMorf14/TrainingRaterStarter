'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Sessions', {
    Name: {type: DataTypes.STRING, allowNull: false },
    startTime: { type: DataTypes.DATE, allowNull: false },
    location: DataTypes.STRING
  }, {
    // classMethods: { NOT NEEDED FOR CURRENT EXAMPLE 
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
  });
  return Sessions;
};