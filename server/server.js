const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

const app = express()
const router = require('./src/routes')

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/api/v1/', router)

app.listen(port, () => {
   console.log(`Server running on port: ${port}`)
})
