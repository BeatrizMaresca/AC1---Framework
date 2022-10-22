import './App.css';
import React, { useState, useEffect } from 'react';

function ReceberAPI() {
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


export default ReceberAPI;
