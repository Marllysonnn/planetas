import React from 'react';
import './scss/header.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>PLANETAS</h1>
            <nav>
                <Link to="/mercurio">Mercurio</Link>
                <Link to="/venus">Vênus</Link>
                <Link to="/terra">Terra</Link>
                <Link to="/marte">Marte</Link>
                <Link to="/jupiter">Júpiter</Link>
                <Link to="/saturno">Saturno</Link>
                <Link to="/urano">Urano</Link>
                <Link to="/netuno">Netuno</Link>
            </nav>
        </header>
    );
}

export default Header;