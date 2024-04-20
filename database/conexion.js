//const { MongoCLient } from 'mongodb';

import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config()
 
//const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_LOCAL = 'mongodb://localhost:27017';
const MONGO_ATLAS = 'mongodb+srv://marcosdelacuadra95:RrB5fx7Zuy73f3Dr@cursonode.kablh3o.mongodb.net/?retryWrites=true&w=majority&appName=CursoNode';
 
console.log(MONGO_LOCAL, MONGO_ATLAS)

//const client = new MongoClient(MONGO_LOCAL);

const dbName = 'educacionit'; 
 /*
const conectarDB = async () => {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server: ' + MONGO_LOCAL);
        const db = client.db(dbName);
        const collection = db.collection('documentos'); 
        //console.log(db)

        //Agregar datos a la base de datos 'si no existe la base con este insert las crea'
        const insertResult = await collection.insertMany([{ a: 11234}, { a: 2 }, { a: 3 }]); 
        console.log('Inserted documents =>', insertResult);

        //alternativa para crear coleccion

        const collection2 =await db.createCollection('documentos2');
        collection2.insertOne({
            nombre:'roberto',
            apellido:'garcia',
            edad:30
        });
        console.log('funciono')
    
        // the following code examples can be pasted here...
    
        return 'done.';
        
    } catch (error) {
        console.log('error de conexion ' ,error.stack );
    }
}
*/

//conectar Mongo DB Atlas



const uri = MONGO_ATLAS

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const clientAtlas = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the clientAtlas to the server	(optional starting in v4.7)
    await clientAtlas.connect();
    // Send a ping to confirm a successful connection
    await clientAtlas.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    /*const db = clientAtlas.db(dbName);
    const collection = db.collection('documentos'); 
    //console.log(db)

    //Agregar datos a la base de datos 'si no existe la base con este insert las crea'
    const insertResult = await collection.insertMany([{ a: 11234}, { a: 2 }, { a: 3 }]); 
    console.log('Inserted documents =>', insertResult);

    //alternativa para crear coleccion

    const collection2 =await db.createCollection('documentos');
    collection2.insertOne({
        nombre:'roberto',
        apellido:'garcia',
        edad:30
    });
    console.log('funciono')*/
    
  } finally {   
    await clientAtlas.close();
  }
}
//run().catch(console.dir);

//console.log(conectarDB())
export default run;
