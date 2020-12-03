const dotenv = require('dotenv');
const express = require('express')
const bodyParser = require("body-parser");
const axios = require('axios')
dotenv.config();
const router = express.Router();
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))
app.get('/', function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app.post('/summarization', async (req, res) => {
  const api = "http://api.meaningcloud.com/summarization-1.0?key="
  const api_key = process.env.api_key
  const text = req.body.text
  const number = req.body.number
  const url = req.body.url
  const params = text ? `&txt=${text}&sentences=${number}` : `&url=${url}&sentences=${number}`
  const response = await axios.post(encodeURI(api + api_key + params), {})

  try {
    const result = JSON.stringify(response.data.summary)
    res.send(result)
  }
  catch (error) {
    console.log('error', error)
  }

})