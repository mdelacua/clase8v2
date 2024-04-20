
import fs from 'node:fs'

import pkg from 'mongodb';
const { MongoClient } = pkg;
import dotenv from 'dotenv' 
dotenv.config()
const MONGO_ATLAS = process.env.MONGO_ATLAS; 
const client = new MongoClient(MONGO_ATLAS);
 
const dbName = 'educacionit';
/* GET users listing. */

const mostrarFormuraio = function(req, res) {
    res.render('registroProductos', { title: 'Registro product' });
    //res.render('registroProductos');
    //res.send('respond with a resource');
};
  
const cargarFormulario = async function(req, res) {
    const { nombre, precio, imagen, stock } = req.body;

    const producto = {
        nombreProducto: nombre,
        precioProducto: precio,
        imagenProducto:imagen,
        stockProducto:stock
    };
   
    console.log(producto)
    
   

    res.json({
        nombre:nombre,
        precio:precio,
        imagen:imagen,
        stock:stock
    })
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    const db = client.db(dbName);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const collection2 =await db.createCollection('documentos');
    collection2.insertOne((producto));

   
};
    
export {
    mostrarFormuraio,
    cargarFormulario
}