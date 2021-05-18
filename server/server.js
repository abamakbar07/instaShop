const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

const app = express()
const router = require('./src/routes')

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/api/v1/', router)

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

app.listen(port, () => {
   console.log(`Server running on port: ${port}`)
})
