const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/keepalive', (req, res) => {
  res.send('Alive')
  res.sendStatus(200)
})



app.get('/home', (req, res) => {
    res.send('Hello World!')
    const path = require('path')
    res.sendFile(path.join(__dirname, '/routes/home.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})