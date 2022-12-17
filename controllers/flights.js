const flight = require('../models/flight')
const Flight = require('../models/flight')
module.exports = {
    create,
    index,
    new: newFlight
}
function create(req, res){
    const flight = new Flight(req.body)
    flight.save(function(err){
        res.redirect('/flights')
    })
}
function index(req, res){
    Flight.find({},function(err, flights){
        res.render('flights/index', {
            flights
        })
    })
}

function newFlight(req, res){
    res.render('flights/new')
}