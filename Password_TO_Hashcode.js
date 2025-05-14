const bcrypt = require('bcrypt');

const password = "Pradip Garai";

async function Hashing(){
    //hashcode + salt 
  const hassPassword = await bcrypt.hash(password,10); // here 10 means 2 power 10 times run the algo
  console.log(hassPassword);
  const salt =await bcrypt.genSalt(10);
  console.log(salt);
}

Hashing();

//  $2b$10$3dBJUd1LBJGyBLvYDXvYWeSc.RiQOhu9Py4JaHH7wQOCsm8r9fJhu 

//$2b$10$3dBJUd1LBJGyBLvYDXvYWeSc.RiQOhu9Py4JaHH7wQOCsm8r9fJhu