const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')
require('dotenv').config();
const {dbConnect}  = require('./dbConnect')
const Jobrouter  = require('./routes/job')
const Userrouter = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(cors());
// Allow specific origin(s)
app.use(cors({
  origin: 'https://job-application-frontend-jade.vercel.app'
}));


app.use('/favicon.ico', (req,res,next)=>{
    return res.end();
})
dbConnect();





app.use('/job', Jobrouter)
app.use('/user', Userrouter)


app.get('/', (req, res)=>{
    return res.status(201).json({message : "Hello from Server"});
})



app.listen(PORT, ()=>{
    console.log("Server is live");
})