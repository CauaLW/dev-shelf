import './Header.css'
import React from 'react'

import logoImg from '../../assets/book-logo-icon.png'

const Header = props => {
    return (
    <header className="header">
        <h1 className="mt-2 ml-2">
            <img src={logoImg} alt="Livro"/> Dev Shelf
        </h1>
    </header>
    )
}

export default Header