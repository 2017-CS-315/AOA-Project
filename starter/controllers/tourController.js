
const Tour= require('../models/tourModel');




exports.getAllTours= async (req,res)=>{
    //res.status(200).send('Hello from the backend')
    try { const allTours= await Tour.find()
        res.status(200).json({'status':'success', 'data':{'tours':allTours}})
    }
    catch(err){
        res.status(404).json({
            'status':'fail',
            'error':err.message
        })
    }
       
    
    }

//TypeError: Cannot read properties of undefined (reading 'id') at getTour



exports.getTour= async (req,res)=>{
    /*  var id =req.params.id*1;
    var i=0;
    while(i<tours.length){
        if(id==tours[i].id){
            var tour=tours[i]
            console.log(tour)
            break;
        }
        i++
    }*/
   try {
    const tour= await Tour.find({"_id":req.params.id})
res.status(200).json({
    'status':'success',
    'data':tour
})
}

catch (err){
    res.status(404).json({
        'status':'fail',
        'error':err.message
    })
}
    }


exports.createNewtour= async (req,res)=>{
  /*  var newTour=req.body;
    newTour.id=tours[tours.length-1].id+1;
   
    
    tours.push(newTour)
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`,JSON.stringify(tours),'utf-8',(err)=>{
        if(err) {console.log(err)}*/

        try {
            const newTour= await Tour.create(req.body)
            res.status(201).json({'status':'success', 'data':newTour})
        }
       catch (err){
        res.status(400).json({
            'status':'fail',
            'error':err.message
        })
       }
    }


exports.changeTour= async (req,res)=>{
    
try {
    const changedTour= await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
   //const changedTour= await Tour.updateOne({"_id":req.params.id},req.body,{new:true}) 
   res.status(200).json({'status':'success', 'data':changedTour})
}

catch(err){
    res.status(400).json({
        'status':'fail',
        'error':err.message
    })
}  
    }



exports.deleteTour=async (req,res)=>{
   
    try {
        const deletedTour= await Tour.deleteMany({"_id":req.body.id});
        res.status(200).json({'status':'success', 'data':'Tour Deleted Succesfully'})
    }
    catch (err) {
        res.status(400).json({
            'status':'fail',
            'error':err.message
        })
    }


    }

