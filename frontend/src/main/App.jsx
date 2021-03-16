import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/Header'
import Main from '../components/template/Main'
import Routes from './Routes'

const App = props => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Header/>
                <Main>
                    <Routes/>
                </Main>
            </React.StrictMode>
        </BrowserRouter>
    )
}

export default App