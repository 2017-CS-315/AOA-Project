const express = require ('express')
const app = express();
const morgan =require('morgan')
const tourRouter=require('./routes/tourRouter')
const userRouter=require('./routes/userRouter')

app.use(express.json());
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV=='development'){app.use(morgan('dev'))}
app.use(express.static(`${__dirname}/public`))
app.use((req,res,next)=>{
    req.createdAt=new Date().toISOString()
    next()

})


app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)




app.use((req,res,next)=>{
    console.log('hellow from the middleware');
    next();
})


module.exports=app;