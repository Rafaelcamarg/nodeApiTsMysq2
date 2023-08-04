const express = require('express');
 
import clientsController from "../controller/clientsController";


const clientsRouter = express.Router();

//Listar registros
clientsRouter.get('/clients', clientsController.listclients);

//Cadastrar usuario
clientsRouter.post('/clients', clientsController.createclient);

//Editar usuario
clientsRouter.put('/client/:id', clientsController.editclient);

//Deletar usuario
clientsRouter.delete('/client/:id', clientsController.deleteclient);

export default clientsRouter;