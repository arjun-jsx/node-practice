const Tour = require("./../models/tourModel")


exports.getAllTours = async (req, res, next) => {
    try{
        const tours =await Tour.find();
            res.status(200).json({
                status: "success",
                results:tours.length,
                data:{
                    tours
                }
            })
    }
    catch(err){
        res.status(400).json({
            status: "failed to get all tours",
            message: err
        })
    }
}
exports.getTour = async (req, res, next) => {

    try {
        const tour = await Tour.findById(req.params.id)
        if(!tour) throw Error
        res.status(201).json({
            status: "success",
            data: { tour }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }


}
exports.createTour = async (req, res, next) => {
    console.log(req.body)
    try {
        const tour = await Tour.create({ ...req.body, date: new Date() })
        res.status(201).json({
            status: "success",
            data: { tour }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }


}
exports.updateTour = async (req, res, next) => {
    console.log(req.body)
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
            returnDocument:'after',
            runValidators:true
        })
        res.status(200).json({
            status: "success",
            data: { tour }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "failed Update",
            message: err
        })
    }


}
exports.deleteTour = async (req, res, next) => {
    try {
          await Tour.findByIdAndDelete(req.params.id)
        //   if(!tour) throw Error
        res.status(204).json({
            status: "success",
             data:null
        })
    }
    catch (err) {
        res.status(404).json({
            status: "failed delete",
            message: "Please try again"
        })
    }


}
