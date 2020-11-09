const express = require('express')
const router = express.Router()

const DirectionController = require('../controllers/direction.controller');

router.get('/', DirectionController.getDirection)

module.exports = router