const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/db')  // Import the database configuration
const UserRoute = require('./routes/UserRoute')
const  ServiceRoutes = require('./routes/ServiceRoute')

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api',UserRoute)
app.use("/api/services", ServiceRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
