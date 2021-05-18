const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const mongoose = require("mongoose");
const connection =
  "mongodb+srv://user:user@cluster0.xibdy.mongodb.net/insta_shop?retryWrites=true&w=majority&ssl=true";

require('dotenv').config()

const app = express()
const router = require('./src/routes/routes')

// set port for deploy to heroku
// const port = process.env.PORT || 5000

// set port for local developing
const port = 3000

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

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
