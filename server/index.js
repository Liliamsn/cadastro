//Criando o servidor
const express = require('express');

//Configura as rotas
const consign = require('consign');

const app = express();

const cors = require('cors');

//Chamando o servidor

app.use(cors());
app.use(express.json());

//Ouvindo a rota
app.listen(3001, ()=> {
    console.log('running on port 3001') 
})

consign()
    .include('./source/helpers/formulario.js')
    .into(app);