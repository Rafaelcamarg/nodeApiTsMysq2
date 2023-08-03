const express = require('express');
 
import clientsController from "../controller/clientsController";


const router = express.Router();

//Listar registros
router.get('/users', clientsController.listclients);

//Cadastrar usuario
router.post('/users', clientsController.createclient);

//Editar usuario
router.put('/user/:id', clientsController.editclient);

//Deletar usuario
router.delete('/user/:id', clientsController.deleteclient);

export default router;