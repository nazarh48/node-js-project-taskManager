require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB =require('./db/connect')
require('dotenv').config()
// middleware
app.use(express.json()) // use for the req.body
 


app.get('/hello', (req, res)=>{
    res.send('TaskManager')
} )

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`app is listenting on the port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start();
