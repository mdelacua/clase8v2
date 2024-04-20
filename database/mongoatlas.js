

//conectar Mongo DB Atlas 

//const MONGO_ATLAS = process.env.MONGO_ATLAS; 
const MONGO_ATLAS = "mongodb+srv://marcosdelacuadra95:RrB5fx7Zuy73f3Dr@cursonode.kablh3o.mongodb.net/?retryWrites=true&w=majority&appName=CursoNode"; 
console.log(MONGO_ATLAS)
const { MongoClient, ServerApiVersion } = require('mongodb');
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
  } finally {
    // Ensures that the clientAtlas will close when you finish/error
    await clientAtlas.close();
  }
}
run().catch(console.dir);