//Require the mongodb connection
const userMng = require("./index").db("Sara").collection("user");

//impoart the objcetID to access the documnets
const ObjectId = require("mongodb").ObjectId;

const bcrypt = require("bcrypt");

//user registration
const registration = async ({ username, password, email, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await userMng.insertOne({
    username,
    hashedPassword,
    email,
    role,
  });
  return result;
};

//user update
const userupdate = async (id, { username, password, email }) => {
  const result = await userMng.replaceOne(
    { _id: ObjectId(id) },
    { username, password, email }
  );
  return result;
};

//delete
const userdelete = async (id) => {
  await userMng.deleteOne({ _id: ObjectId(id) });
};

//login
// const login = a

module.exports = { registration, userupdate, userdelete };
