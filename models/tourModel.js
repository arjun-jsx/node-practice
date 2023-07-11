const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tourSchema = new Schema({
    name:{
        type:String,
        required:[true,'A tour must have name'],
        unique:true
    },
    price: {
        type:Number,
        required:[true,'A tour must have price ']
    },
    rating: {
        type:Number,
        default:4.5
    },
    date: Date
})

const Tours = mongoose.model('tours',tourSchema)

module.exports = Tours