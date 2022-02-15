const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080;

app.get('/keepalive', (req, res) => {
  res.send('Alive')
  res.sendStatus(200)
})



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/routes/home.html'));
})

app.get('/melhores', (req, res) => {
  res.sendFile(path.join(__dirname, '/routes/top.html'));
})

app.get('/lista', (req, res) => {
  res.sendFile(path.join(__dirname, '/routes/champlist.html'));
})

app.get('/datas', (req, res) => {
  res.sendFile(path.join(__dirname, '/routes/champdate.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})