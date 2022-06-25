//import koa
const Koa = require("koa");

//app start
const app = new Koa();

//DBconnect
require("./dal/index");

app.use((ctx) => {
  ctx.body = "Hello Welcome to Online Sara\n Hi Pabasara ";
});

app.listen(3005, () => {
  console.log("App is running on port 3005");
  console.log("http://localhost:3005");
});
