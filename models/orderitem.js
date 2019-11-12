'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models.Order);
    OrderItem.Product = OrderItem.belongsTo(models.Product);
  };
  return OrderItem;
};