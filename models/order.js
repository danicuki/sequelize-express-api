'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.OrderItems = Order.hasMany(models.OrderItem);
  };
  return Order;
};