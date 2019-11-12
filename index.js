const express = require('express');
const app = express();
const models = require("./models/");
const Order = models.Order;
const User = models.User;
const Product = models.Product;
const OrderItem = models.OrderItem;

app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("OK");
});

app.get("/orders/:id", (req, resp) => {
  Order.findByPk(req.params.id, {
    include: [User, { association: Order.OrderItems, include: [OrderItem.Product] }]
  }).then(o => resp.send(o.dataValues));
});

app.put("/orders/:id", (req, resp) => {
  Order.findByPk(req.params.id).then( o => {
    o.update(req.body).then( (o2) => resp.send(o2.dataValues) );
  });
});

app.post("/orders", (req, resp) => {
  console.log(req);
  Order.create(req.body, {include: [OrderItem]}).then( o => {
    resp.send(o.dataValues);
  });
});

app.listen(666, () => {
  console.log("Vai capeta");
})