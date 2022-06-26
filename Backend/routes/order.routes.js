// const Router = require("@koa/router");

// //import methods created in item.api.js
// const {
//   InsertItem,
//   retrieveAllItems,
//   retrieveItem,
//   EditItem,
//   EditItemCount,
//   removeItem,
// } = require("../api/item.api");

// //define the prefix of the api
// const router = new Router({
//   prefix: "/onlineSaraItem",
// });

// //get all items in the online shop
// router.get("/", async (ctx) => {
//   ctx.body = await retrieveAllItems();
// });

// //get an item
// router.get("/:id", async (ctx) => {
//   const id = ctx.params.id;
//   ctx.body = await retrieveItem(id);
// });

// //post
// router.post("/", async (ctx) => {
//   //get the product details from the body
//   let item = ctx.request.body;
//   item = await InsertItem(item);

//   ctx.status = 201;
//   ctx.body = item;
// });

// //update
// router.put("/:id", async (ctx) => {
//   //get the id from the url
//   const id = ctx.params.id;
//   //get the update details from the body
//   let item = ctx.request.body;

//   item = await EditItem(id, item);

//   ctx.response.status = 200;
//   ctx.body = item;
// });

// //update item count
// router.put("/itemcount/:id", async (ctx) => {
//   //get the id from the url
//   const id = ctx.params.id;
//   //get the update details from the body
//   let item = ctx.request.body;

//   item = await EditItemCount(id, item);

//   ctx.response.status = 200;
//   ctx.body = item;
// });

// //delete items
// router.delete("/:id", async (ctx) => {
//   const id = ctx.params.id;
//   ctx.body = removeItem(id);
//   ctx.response.status = 200;
// });

// module.exports = router;
