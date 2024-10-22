const express = require('express')
const app = express()
const port = 8000

app.get('/' , (req, res)=>{
    res.send('Olá, bem vindos ao primeiro Servidor da Ubá')
})

app.listen(port, ()=>{
    console.log('Servidor Iniciado com Sucesso')
})