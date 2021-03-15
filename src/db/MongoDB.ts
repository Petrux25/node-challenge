
import {MongoMemoryServer}  from 'mongodb-memory-server';
const mongod = new MongoMemoryServer();

async function init () {
  const uri = await mongod.getUri();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();
  return {
    uri,
    port,
    dbPath,
    dbName
  }
};




export default init;