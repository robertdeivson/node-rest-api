const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios-controller');

router.post('/cadastro', usuariosController.postCadastroUsuarios);

router.post('/login', usuariosController.postLoginUsuarios);

module.exports = router;