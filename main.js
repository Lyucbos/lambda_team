const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send(req.ip)
    console.log(req.ip)
})

app.listen(port, () => {
    console.log('Listening on port ${port}')
})