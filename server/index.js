const express = require('express')
const cors = require('cors')
const app = express()
var path = require('path')
const PORT = 5000
const Axios = require('axios')

app.use(cors())
app.use(express.json());


app.get('/products', async function (req, res) {
  try {
    const payload = await Axios.get('https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application/products.json')
    res.status(201).send(payload.data)
  } catch (error) {
    throw new Error('Failed to fetch products')
  }
})

app.get('/cart', async function (req, res) {
  try {
    const payload = await Axios.get('https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application/shoppingCart.json')
    res.status(201).send(payload.data)
  } catch (error) {
    throw new Error('Failed to fetch products')
  }
})

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`)
})