const express = require("express")
const router = express.Router()
const { img } = require('./controller')

router.get('/', img)

module.exports = router
