// canary-demo  with version "v2"
const express = require('express')
const app = express()
const port = 3000
const { v4 } = require('uuid');
app.get('/success', (req, res) => {
  res.json({
    description: "Hello v2"
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
