import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Livros</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cadastrar" className="nav-link">Cadastrar livro</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav