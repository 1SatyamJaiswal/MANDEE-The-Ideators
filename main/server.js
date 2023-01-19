const express = require('express')
const app = express()
const port = 4000

app.use(require('cors')())
app.use(express.json())
app.use("/uploads",express.static("./uploads"))
app.use('/register',require("./routes/register"))

let z  = null

app.get('/', (req, res) => res.send(z))
app.post('/' ,(req,res) => {
  console.log(req.body)
  // z = req.body.details.image
  res.json("okk")
} )


app.listen(port, () => console.log(`Example app listening on port ${port}!`))