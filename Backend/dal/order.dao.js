//get the db connection
const order = require("./index").db("Sara").collection("order");

//get an objectID ref
const ObjectId = require("mongodb").ObjectId;

//add an order to cart-customer
const addOrderCart = async ({ itemName, price, size, brand, count }) => {
  const res = await order.insertOne({ itemName, price, size, brand, count });
  return res;
};

//add to wishlist
const addWishList = async ({ itemName, price, size, brand, count }) => {
  const res = await order.insertOne({ itemName, price, size, brand, count });
  return res;
};

//get cart orders
const getCartOrder = async (id) => {
  const cartOrder = await order.find({ _id: ObjectId(id) });
  return cartOrder.toArray();
};

//get wishlist details
const getWishList = async (id) => {
  const wishListDetails = await order.find({ _id: ObjectId(id) });
  return wishListDetails.toArray();
};
module.exports(addOrderCart, addWishList, getCartOrder, getWishList);
