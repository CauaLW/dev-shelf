import axios from 'axios'
import React, { Component } from 'react'

export default class Alter extends Component {
    state = {}
    id
    
    componentDidMount() {
        this.id = window.location.href.split('/')[4]
        axios.get(`http://localhost:3001/livros/${this.id}`)
            .then(resp => resp.data)
            .then(resp => {
                this.setState({ title: resp.title, writer: resp.writer, year: resp.year, pages: resp.pages })
            })
    }

    updateBook() {
        const title = document.querySelector('#title').value
        const writer = document.querySelector('#writer').value
        const year = document.querySelector('#year').value
        const pages = document.querySelector('#pages').value

        const data = {
            title,
            writer,
            year,
            pages
        }

        const config = {
            method: 'put',
            url: `http://localhost:3001/livros/${this.id}`,
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify(data)
        }

        axios(config)
            .then(window.alert('Livro atualizado!'))
            .then(window.location.href = 'http://localhost:3000/')
    }
        
    renderForm() {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Título:</label>
                        <input type="text" className="form-control" id="title" placeholder={this.state.title}/>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Autor:</label>
                        <input type="text" className="form-control" id="writer" placeholder={this.state.writer}/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Ano:</label>
                        <input type="number" className="form-control" id="year" placeholder={this.state.year}/>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Páginas:</label>
                        <input type="number" className="form-control" id="pages" placeholder={this.state.pages} />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={() => this.updateBook()}>Alterar</button>
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