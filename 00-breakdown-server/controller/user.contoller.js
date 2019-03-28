require('dotenv').config();
const userService = require('../services/user.services');

const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    if (!username && !password) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameters: username, password!',
      });
    } else if (!password) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter: password!',
      });
    } else if (!username) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter: username!',
      });
    }
  } else {
    userService.postUser(username, password)
      .then((users) => res.status(200).json({
        userId: users._id,
        username: users.username //username, userid
      }))
      .catch((error) => {
        if (error.code === 11000) {
          res.status(409).json({
            status: 'error',
            error: 'Taken username, choose another one',
          });
        } else {
          console.log(error)
          res.status(500).json(error);
        }
      });
  }
};

const userLogin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    if (!username && !password) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameters: username, password!',
      });
    } else if (!password) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter: password!',
      });
    } else if (!username) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter: username!',
      });
    }
  } else {
    userService.getUser(username)
      .then((user) => {
        if (user.validPassword(password)) {
          res.status(200).json({
            userId: user._id,
            username: user.username,
            ownTopics: user.topics,
            score: user.score,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: 'Wrong password!',
          });
        }
      })
      .catch(error => res.status(401).json({ status: error, message: `no such user: ${username}` }));
  }
};

const getAllAboutUser = (req, res) => {
  const { userId } = req.body;
  if(!userId) {
    res.status(400).json({status: 'error', message: 'You missed something'})
  } else {
    userService.getAllUserinfo(userId)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  }

};

module.exports = {
  registerUser,
  userLogin,
  getAllAboutUser,
};

