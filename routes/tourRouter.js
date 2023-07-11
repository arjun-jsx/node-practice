const expres = require('express')
const router = expres.Router()
const tourRouter = require('../controllers/tourController')


router.route('/')
.get(tourRouter.getAllTours)
.post(tourRouter.createTour)

router.route('/:id')
.get(tourRouter.getTour)
.patch(tourRouter.updateTour)
.delete(tourRouter.deleteTour)



module.exports = router;