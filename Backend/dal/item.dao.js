//require the mongodb connection
const item = require("./index").db("Sara").collection("item");

//object ID to access the documnets
const ObjectId = require("mongodb").ObjectId;

//add items - vendor
const addItem = async ({ itemName, price, size, brand, itemCount }) => {
  const result = await item.insertOne({
    itemName,
    price,
    size,
    brand,
    itemCount,
  });
  return result;
};

//getAllItems
const getAllItems = async () => {
  const itemList = await item.find();
  return itemList.toArray();
};

//getItem
const getItem = async (id) => {
  return await item.findOne({ _id: ObjectId(id) });
};

//update item details - vendor
const updateItem = async (id, { itemName, price, size, brand, itemCount }) => {
  const result = await item.replaceOne(
    { _id: ObjectId(id) },
    { itemName, price, size, brand, itemCount }
  );
  return result;
};

//update item coundt-- when coustomer order an item
const updateItemCount = async (id, { itemCount }) => {
  const res = await item.replaceOne({ _id: ObjectId(id) }, { itemCount });
  return res;
};

//delete item -vendor
const deleteItem = async (id) => {
  await item.deleteOne({ _id: ObjectId(id) });
};

module.exports = { addItem, getAllItems, getItem, updateItem, updateItemCount };
