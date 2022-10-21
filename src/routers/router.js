const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/universities/init/', controller.findUniversities)

router.get('/universities/' , controller.getAllUniversities)

router.get('/universities/:id' , controller.findById)

router.post('/universities/' , controller.addUniversitie)

router.put('/universities/:id' , controller.alterUniversitie)

router.delete('/universities/:id', controller.deleteUniversitie)

module.exports = router;