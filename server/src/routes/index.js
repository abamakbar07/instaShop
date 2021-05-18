const express = require('express')
const { coba } = require('../controllers/testControllers')
const router = express.Router()

router.get('/coba', (req, res) => {
   res.send({
      status: "success"
   })
})

router.get('/mantap', coba)

module.exports = router;