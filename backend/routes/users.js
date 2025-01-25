var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.listUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserDetails);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.editUser);
router.post('/login', userController.loginUser);

router.get('/contact', function (req, res, next) {
  res.send('<h1>In contact route inside Users</h1>');
});
router.get('/about', function (req, res, next) {
  res.send('<h1>In about page of Users</h1>');
});

module.exports = router;