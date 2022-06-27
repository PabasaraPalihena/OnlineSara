//import koa
const Koa = require("koa");
//import body-parser
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
//import the routes
const itemroutes = require("./routes/item.routes");

//app start
const app = new Koa();

//DBconnect
require("./dal/index");

//use body parser
app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
//registering the routes
app.use(itemroutes.routes()).use(itemroutes.allowedMethods());

// app.use((ctx) => {
//   ctx.body = "Hello Welcome to Online Sara\n Hi Pabasara ";
// });

app.listen(3005, () => {
  console.log("App is running on port 3005");
  console.log("http://localhost:3005");
});
