// Service-1 with version "v1"
const express = require('express')
const app = express()
const port = 3000
const { v4 } = require('uuid');
app.get('/', (req, res) => {
  res.json({
    description: "Hello Execution on version 1 deployment",
    version: "v1",
    uuid: v4(),
    timestamp: new Date(),
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
