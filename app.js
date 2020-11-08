const express = require('express')
const app = express()
const PORT = 8080

app.get('/',(req,res)=>{
    res.send("new world!")
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
