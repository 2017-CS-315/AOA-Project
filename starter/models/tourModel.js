const mongoose=require('mongoose');

const tourSchema= new mongoose.Schema({
  name: {
      type: String,
      unique: true,
      required: [true,'A tour must have a name']
  },
  duration: {
type: Number,
required:[true,'A tour must have a duration']
  },
  maxGroupSize:{
    type: Number,
    required:[true,'A tour must have a maxGroupSize']
  },
  difficulty:{
    type: String,
    required:[true,'A tour must have a difficulty']
  }
  ,
  price :{
      type: Number,
      required:[true,'A tour must have a price']
  },
  rating :{
      type:Number,
      default:4.5
  }
})

const Tour =mongoose.model('Tour',tourSchema)


module.exports=Tour;