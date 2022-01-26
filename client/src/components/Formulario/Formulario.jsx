import React, { useState } from "react";

function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState(0);

    const addPessoa = (evento)=> {

        evento.preventDefault();

        const axios = require('axios')
        axios.post('http://localhost:3001/dado', {
          nome: nome,
          email: email,
          telefone: telefone
        }).then(()=> {console.log("Sucess");});
        
    }

    return (
        <section className="conteudo">
            <img className="conteudo-imagem" src='/image/imagem.png'/>
            <div className='conteudo-principal'>
                <h2 className="conteudo-titulo">Cadastro de Cliente</h2>
                <form className='conteudo-cadastro'>
                    <input 
                    className='conteudo-cadastro_input' 
                    type='text' 
                    placeholder='Nome completo' 
                    onChange={(evento)=> {setNome(evento.target.value)}}
                    />
                    <input 
                    className='conteudo-cadastro_input' 
                    type='email' 
                    placeholder='Email' 
                    onChange={(evento)=> {setEmail(evento.target.value)}}
                    />
                    <input 
                    className='conteudo-cadastro_input' 
                    type='tel' 
                    placeholder='(XX) XXXX-XXXX' 
                    onChange={(evento)=> {setTelefone(evento.target.value)}} 
                    />
                    <button className='conteudo-cadastro_submit' onClick={addPessoa}>Enviar</button>
                </form>
            </div>
            
        </section>
    );
    
}

export default Formulario