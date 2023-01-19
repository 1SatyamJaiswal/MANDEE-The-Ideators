const express = require('express')
const app = express()
const port = 4000

app.use(require('cors')())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/' ,(req,res) => {
  console.log(req.body)
  let x = req.body.details.image
  console.log(typeof(x),x)
} )
app.listen(port, () => console.log(`Example app listening on port ${port}!`))