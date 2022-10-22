import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    var [numeroCliente, setNumeroCliente] = useState(0)
    var [data, setData] = useState([]);

    const getData=()=>{
        fetch('http://localhost:5000/v2/listarCliente'
        )
        .then(function(response){
            console.log(response)

            setNumeroCliente(response.length)
            setData(response);
        })
        .then(function(response) {
            console.log('2')
            setData(response)
        });
      }

      return (
        <div className="CallApi">
            <div style={{backgroundColor:'green'}} className="display-board">
                <h4 style={{color: 'white'}}>Criar Clientes</h4>
                <div className="number">
                    {numeroCliente}
                </div>
                <div className="btn">
                    <button type="button" onClick={(e) => getData()} className="btn btn-warning">Listar clientes</button>
                </div>
            </div>
        </div>
    );
}

export default function App() {
  return (
      <>
    <header>
    <Link to='/Home'>Home</Link>
    <Link to='/Cadastro'>Cadastro</Link>
    <Link to='/QuemSomos'>QuemSomos</Link>
    </header>
    <div>
            <Link to='/'>Retornar a Página Principal</Link>
            <form name="meu_form">
                <h1>Projeto AC1</h1>
                <p>Página Inicial</p>
            </form>
    </div>
    <hr></hr>
    <main>
        <Switch>
          <Route path='/Home' component= {Home}/>
          <Route path='/Cadastro' component= {Cadastro}/>
          <Route path='/QuemSomos' component= {QuemSomos}/>
        </Switch>
      </main>
      </>
    
  );
}
