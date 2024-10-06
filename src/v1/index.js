// Service-1 with version "v1"
const express = require('express')
const app = express()
const port = 3000
const { v4 } = require('uuid');
app.get('/success', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.json({
    description: "Hello v1",
    user: req.header('end-user')
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
