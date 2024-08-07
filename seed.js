const client = require(`./client.js`);

const createTables = async() => {
  try{
    client.query(`
      CREATE TABLE iceCreamFlavors(
      id SERIAL PRIMARY KEY,
      flavor VARCHAR NOT NULL(30)
      price INT NOT NULL
      
      
      );

      `);

  }catch(err){
    console,log(err)
  }
  const syncAndSeed = async() => {
    await client.connect();
    console.log(`yerrrr`)
    createTables();
    console.log(`CREATED`)
  }
}
syncAndSeed();