const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airportD:{
        type:String,
        enum: ['AUS', 'DFW', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival:{
        type: String
    }
})

const flightSchema = new Schema({
    airline:{
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        // default: 'DEN'
    },
    flightNo: {
      type: Number,
      min:10,
      max:9999
    },
    departs: {
        type: Date,
        default: function(){

            return new Date().setFullYear()+1
        }
    },
    destinations: [destinationSchema]
})

// const Flight = new mongoose.model("Flight", flightSchema)

// const data = new Flight({
//     airline: 'american',
//     airport: 'DEN',
//     flightNo: 104,
//     departs: new Date
// })
// data.save()

module.exports = mongoose.model('Flight', flightSchema)
