const express = require('express');
 
import productController from "../controller/productsController";


const productRouter = express.Router();

//Listar registros
productRouter.get('/products', productController.listproducts);

//Cadastrar usuario
productRouter.post('/products', productController.createproducts);

//Editar usuario
productRouter.put('/product/:id', productController.editproducts);

//Deletar usuario
productRouter.delete('/product/:id', productController.deleteproducts);

export default productRouter;