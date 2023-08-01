const dotenv= require('dotenv')
dotenv.config({path:`${__dirname}/../../config.env`})
const fs =require('fs');
const Tour= require('../../models/tourModel')
const mongoose= require('mongoose');
const { exit } = require('process');
const DB = //process.env.DATABASE.replace(
    process.env.DATABASE_LOCAL.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));



const toursData= JSON.parse(fs.readFileSync('./tours.json','utf-8'));
const toursDeleter= async ()=>{
  try {
const deleted = await Tour.deleteMany()
console.log(deleted)

  }
  catch (err) {
console.log(err)
  }
  process.exit();
}
const toursInjectorDB=async ()=>{
  try{
    const toursInjected= await Tour.create(toursData)
console.log(toursInjected);

  }
  catch(err){
console.log(err)
  }
  process.exit();
}

if (process.argv[2]=='--inject') {
  toursInjectorDB()
}
else if (process.argv[2]=='--delete'){
  toursDeleter()
}



