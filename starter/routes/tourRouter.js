const express=require('express')
const tourController=require('../controllers/tourController')


const router = express.Router()
//router.param('id',tourController.checkID)
router.route('/').get(tourController.getAllTours).post(tourController.createNewtour)
router.route('/:id').get(tourController.getTour).patch(tourController.changeTour).delete(tourController.deleteTour)

module.exports=router;