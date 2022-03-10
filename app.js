require('dotenv').config()
const express = require('express') 
const app = express()
const routes = require('./routes/tasks')
const connectDb = require('./db/connect')

//middleware
app.use(express.json())


//routes
app.get('/ping', (req, res) => {
    res.send("pong")
})

app.use('/api/tasks',routes)

const port = process.env.PORT

const start = async()=>{
  try{
       const db = await connectDb(process.env.MONGO_URL);
       console.log("Database Connected Successfully")
       app.listen(port, console.log(`server listening on port ${port}`))
  }
  catch(err){

  }
}

start()

