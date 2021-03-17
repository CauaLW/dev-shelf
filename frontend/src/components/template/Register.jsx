import axios from 'axios'
import React, { Component } from 'react'

const baseUrl = 'http://localhost:3001/livros'

export default class Register extends Component {
    checkData() {
        const title = document.querySelector('#title').value ? true : false
        const writer = document.querySelector('#writer').value ? true : false
        const year = document.querySelector('#year').value ? true : false
        const pages = document.querySelector('#pages').value ? true : false

        const valid = title && writer && year && pages

        return valid
    }

    register() {
        if(this.checkData()) {
            const title = document.querySelector('#title').value
            const writer = document.querySelector('#writer').value
            const year = document.querySelector('#year').value
            const pages = document.querySelector('#pages').value
    
            const data = JSON.stringify({ title, writer, year, pages })
    
            const config = {
                method: 'post',
                url: baseUrl,
                headers: { 'Content-Type': 'application/json'},
                data
            }
            axios(config)
                .then(function() {
                    window.alert('Livro adicionado!')
                    window.location.href = 'http://localhost:3000/'
                })
                .catch(function(error) { 
                    const errorCode = error.response.data
                    if (errorCode === '22P02') {
                        window.alert('Um ou mais dados são inválidos. Tente novamente!')
                    }
                    else if (errorCode.toString() === '23505')
                    window.alert('Um livro com este título já existe!')
                    window.location.href = 'http://localhost:3000'
                })
        }
        else {
            window.alert('Um ou mais dados estão incorretos!')
        }
    }

    renderForm() {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Título:</label>
                        <input type="text" id="title" className="form-control" placeholder="Digite o título do livro"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Autor:</label>
                        <input type="text" id="writer" className="form-control" placeholder="Digite o autor do livro"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Ano:</label>
                        <input type="number" id="year" className="form-control" placeholder="Digite o ano do livro"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Páginas:</label>
                        <input type="number" id="pages" className="form-control" placeholder="Digite o número de páginas do livro"/>
                    </div>
                </div>
                <button className="btn btn-primary d-flex ml-auto" onClick={() => this.register()}>Cadastrar</button>
        </div>
        )
    }

    render() {
        return (
            <React.StrictMode>
                {this.renderForm()}
            </React.StrictMode>
        )
    }
}