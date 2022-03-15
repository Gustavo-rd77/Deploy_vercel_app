const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res)=>{
    console.log("hola mundo")
    res.send({message:'chanchito feliz'})
})

app.listen(port,()=>{
    console.log('Hola servidor local')
})