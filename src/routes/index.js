const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const userController = require('../controllers/userController');

router.get('/files', fileController.getAllFiles);
router.get('/files/:id', fileController.getFileById);
router.post('/files', fileController.createFile);
router.put('/files/:id', fileController.updateFile);
router.delete('/files/:id', fileController.deleteFile);

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;