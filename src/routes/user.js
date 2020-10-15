const {Router} =require('express');

const userController = require('../controller/user')

const router =Router();

router.get('/',userController.getUsers)

router.put('/:userId',userController.updateUser)

router.get('/post-data',userController.postUsers)

router.get('/download-user-data',userController.downloadUsers)

module.exports= router;