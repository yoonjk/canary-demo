// Service-1 with version "v1"
const express = require('express')
require('dotenv').config()
const http = require('http');//모듈을 불러온다.
const app = express()
const port = process.env.PORT 
console.log('port:', port)
const { v4 } = require('uuid');
const REVIEWS_SERVER = process.env.REVIEWS_SERVER || 'localhost'
const REVIEWS_PORT = process.env.REVIEWS_PORT || 80
const url = `http://${REVIEWS_SERVER}:${REVIEWS_PORT}/success`

console.log('url:', url)
app.get('/success', (req, res) => {
  http.get(url, (response) => {
    response.on('data', (chunk) => {
      const resData = JSON.parse(chunk); 
      console.log('resData:', resData)
      res.json({
        description: resData.description
      })
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
