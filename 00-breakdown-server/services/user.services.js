const User = require('../models/user');

const postUser = (username, password) => new Promise((fullfill, reject) => {
  const newUser = new User({
    username,
    password,
  });
  newUser.setPassword(password);
  newUser.save((error, users) => {
    if (error) {
      reject(error);
    } else {
      fullfill(users);
    }
  });
});

const getUser = username => new Promise((fullfill, reject) => {
  User.findOne({ username }, (error, user) => {
    if (error) {
      reject(error);
    } else {
      fullfill(user);
    }
  });
});

const getUserById = userId => new Promise((fullfill, reject) => {
  User.findById({ _id: userId }, (error, user) => {
    if (error) {
      reject(error);
    } else {
      fullfill(user);
    }
  })
})
module.exports = {
  postUser,
  getUser,
  getUserById,
};