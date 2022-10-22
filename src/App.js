import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos';
import receberAPI from './receberAPI';

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
          <Route path='/receberAPI' component= {receberAPI}/>
        </Switch>
      </main>
      </>
    
  );
}

