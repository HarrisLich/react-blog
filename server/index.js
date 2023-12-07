const cors = require('cors')
const express = require('express')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const path = require('path')

const dbString = "mongodb+srv://harrislich:_Welc0memanuel13@cluster0.amkrpdx.mongodb.net/react-blog"
mongoose.set({strictQuery: false})
mongoose.connect(dbString)

app.use(cors())
app.use(bodyParser.json());

app.post("/", (req,res)=>{
    res.json({msg: "hello world"})
})

app.use("/api", apiRouter)
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3001)