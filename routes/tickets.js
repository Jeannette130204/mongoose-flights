const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

router.get('/flights/:id/new', ticketsCtrl.new)
router.post('/flights/:id', ticketsCtrl.create)

module.exports = router