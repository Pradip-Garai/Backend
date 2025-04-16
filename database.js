const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL to connect Cluster
const url = 'mongodb+srv://PradipCoderKolkata:KolkataHunter@codingaddapradip.weszirt.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'Placement2026';

async function main() {
  // Use connect method to connect to the server / cluster
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName); // connect to my database 
  const collection = db.collection('user'); // connect to my collection 

  // the following code examples can be pasted here...

  return 'Connected successfully to Database\nAll OK';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());