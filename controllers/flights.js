// const flight = require('../models/flight')
const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
module.exports = {
    create,
    index,
    new: newFlight,
    show
}
function getOne(){

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
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', {title: 'Flight Details:', flight, tickets})
    })
    
})
}
