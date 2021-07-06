const express = require('express')
const path = require('path')

const app = express()
const port = 9901

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
})

app.get('/create', (req, res) => {
  res.sendFile(path.join(`${__dirname}/src/create/index.html`))
})

app.listen(port, () => {
  console.log(`Servidor na porta ${port}`)
})
