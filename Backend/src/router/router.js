const express = require('express');
const router = express.Router();
const UserController = require('../controller/controller')


router.route('/company').post(UserController.add)
router.route('/company').get(UserController.find)
router.route('/company/ind').get(UserController.get)





module.exports = router;