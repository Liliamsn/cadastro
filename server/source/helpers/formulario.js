
module.exports = app => {

    const mysql = require('mysql');

    //Criando a conexao com o banco
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cadastro'
    });
    
    
    //Chamando uma rota
    app.post('/dado', (req, res)=> {
        const nome = req.body.nome;
        const email = req.body.email;
        const telefone = req.body.telefone;
            
        db.query(
            'INSERT INTO pessoas (nome, email, telefone) VALUES (?,?,?)', 
            [nome, email, telefone], 
            (err, result)=> {
                if(err) {
                    console.log(err);
                } else {
                    res.send('Valores inserirdos com sucesso!');
                }
        })
    });
}
