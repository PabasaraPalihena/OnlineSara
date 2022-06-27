//Require the mongodb connection
const userMng = require("./index").db("Sara").collection("user");

//impoart the objcetID to access the documnets
const ObjectId = require("mongodb").ObjectId;

const bcrypt = require("bcrypt");

//user registration
const registration = async ({ username, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await userMng.insertOne({
    username,
    hashedPassword,
    role,
  });
  return result;
};

// //login
// const login = async ({ username, password }) => {
//   if (username === username && password === password) {
//     return;
//   }
// };

module.exports = { registration };
