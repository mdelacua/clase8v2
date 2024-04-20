

import express from 'express';
const router = express.Router();

import  {mostrarFormuraio,
    cargarFormulario
} from '../controllers/productController.js';
    

router.get('/', mostrarFormuraio) 
router.post('/', cargarFormulario) 
/* GET users listing. */
/*router.get('/', function(req, res) {
  res.render('registroProductos', { title: 'Registro product' });
  //res.render('registroProductos');
  //res.send('respond with a resource');
});*/

export default router;
