import React from 'react';
import { Link } from "react-router-dom";

export default function QuemSomos(){
    return (
        <div>
            <Link to='/'>Retornar a Página Principal</Link>
            <form name="meu_form">
                <h1>Quem Somos</h1>
            </form>
        </div>
    )
}