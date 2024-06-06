const mongoose = require("mongoose");
const uri =
  "mongodb+srv://devfollioDB:uaMmrchkml7QPs2e@cluster0.ogzyvdv.mongodb.net/devfollio?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Conectado ao MongoDB Atlas!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB Atlas:", error);
    process.exit(1);
  }
}

module.exports = {
  connectDB,
};

/*const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getCollectionData() {
    try {
        // Conectar ao MongoDB
        await client.connect();
        console.log('Conectado ao MongoDB...');

        // Selecionar o banco de dados e a coleção
        const database = client.db('devfollio');
        const collection = database.collection('tecnologias');

        // Executar a consulta (por exemplo, encontrar todos os documentos na coleção)
        const query = {};
        const result = await collection.find(query).toArray();
        console.log(result)
        return result;
    } catch (e) {
        console.error('Erro ao conectar ao MongoDB:', e);
    } finally {
        // Fechar a conexão com o MongoDB
        await client.close();
        console.log('Conexão com o MongoDB fechada.');
    }
}
module.exports = { getCollectionData };
console.log(getCollectionData())*/
