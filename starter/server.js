const dotenv= require('dotenv')
dotenv.config({path:`${__dirname}/config.env`})
const app = require('./app')



const mongoose= require('mongoose');
const DB = //process.env.DATABASE.replace(
    process.env.DATABASEa.replace(
    '<password>',
    process.env.WHO_TO_TRUST
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
