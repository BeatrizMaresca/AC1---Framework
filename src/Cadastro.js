import React from 'react';
import { Link } from "react-router-dom";
import './Cadastro.css';


export default function Cadastro(){
    return (
        <div>
            <Link to='/'>Retornar a Página Principal</Link>
            <form name="meu_form">
                <h1>Cadastro</h1>
                    <label for="nome">Nome</label>
                    <input type="text" id="nomeid" placeholder="Tiago Vale" required="required" name="nome" />
                    <label for="fone">Fone</label>                    
                    <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />                    
                    <label for="email">Email</label>                    
                    <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" />                    
                    <label for="opniao">Comentário</label>                    
                    <textarea placeholder="Deixe sua opnião"></textarea>                    
                    <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
                    <input type="submit" class="info" onclick="Info();" value="Informações Preenchidas" />
            </form>
        </div>
    )
}