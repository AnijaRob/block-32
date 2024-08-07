const newFlavors = async() => {
  try{
    await client.query(`
      INSERT INTO iceCreamFlavors(flavor,price)
      VALUES(${flavor}, ${price});
      `);
  

  }catch(err) {
    console.log(err);
  }
}