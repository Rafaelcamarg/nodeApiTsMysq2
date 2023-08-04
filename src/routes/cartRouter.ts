const express = require('express');
 
import cartController from "../controller/cartController";


const cartRouter = express.Router();

//Listar registros
cartRouter.get('/carts', cartController.listcart);

//Cadastrar usuario
cartRouter.post('/carts', cartController.createcart);

//Editar usuario
cartRouter.put('/cart/:id', cartController.editcart);

//Deletar usuario
cartRouter.delete('/cart/:id', cartController.deletecart);

export default cartRouter;