require('dotenv').config()  // It is basically the deployment file which bascially used to deploying the server and site.
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/id', (req, res)=>{
    res.send('Trying to login into page')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login to this website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})  