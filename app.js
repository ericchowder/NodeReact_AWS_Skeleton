const express = require('express')
const app = express()
const PORT = process.env.port || 3000

app.get('/',(req,res)=>{
    res.send("new world!")
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
