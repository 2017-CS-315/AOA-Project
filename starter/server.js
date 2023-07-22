const dotenv= require('dotenv')
dotenv.config({path:`${__dirname}/config.env`})
const app = require('./app')
const abc= process.env.WHO_TO_TRUST

const mongoose= require('mongoose');
const DB = //process.env.DATABASE.replace(
    process.env.DATABASEa.replace(
    '<password>',
    abc
  );
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
