//import the method that we exported in item.dao.js
const {
  addItem,
  getAllItem,
  getItem,
  updateItem,
  updateItemCount,
  deleteItem,
} = require("../dal/item.dao");

//map the add item method
const InsertItem = async ({ itemName, price, size, brand, itemCount }) => {
  //create an item objcet
  const item = { itemName, price, size, brand, itemCount };
  //call the additem method and pass the created object
  return await addItem(item);
};

//get Items
const retrieveAllItems = async () => {
  return await getAllItem();
};

//get an Item
const retrieveItem = async (id) => {
  return await getItem(id);
};

//update method
const EditItem = async (id, { itemName, price, size, brand, itemCount }) => {
  const item = {
    itemName,
    price,
    size,
    brand,
    itemCount,
  };
  return await updateItem(id, item);
};
//update method
const EditItemCount = async (id, { itemCount }) => {
  return await updateItemCount(id, { itemCount });
};

//delete
const removeItem = async (id) => {
  return await deleteItem(id);
};
module.exports = {
  InsertItem,
  retrieveAllItems,
  retrieveItem,
  EditItem,
  EditItemCount,
  removeItem,
};
