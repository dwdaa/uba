const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '../')));
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/solicitar', (req, res) => {
    const { local, destino } = req.body;
    console.log(`Local: ${local}, Destino: ${destino}`);
    res.send(`<h2>Solicitação Recebida! Obrigado.</h2>`);
});

app.listen(port, ()=>{
    console.log('Servidor Iniciado com Sucesso')
})