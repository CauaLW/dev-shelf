import './Home.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import deleteIcon from '../../assets/delete-icon.png'
import editIcon from '../../assets/edit-icon.png'

const baseUrl = 'http://localhost:3001/livros'
const initialState = {
    list: []
}
axios.get(baseUrl)
    .then(resp => initialState.list = resp.data)

export default class Home extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios.get(baseUrl).then(resp => { this.setState({ list: resp.data }) })
    }

    async searchBook() {
        await this.refresh()
        const title = document.querySelector('#title').value.trim().toLowerCase()

        const books = this.state.list.filter(book => book.title.trim().toLowerCase() === title)
        this.setState({ list: books })
    }

    delete(book) {
        if(window.confirm('Tem certeza que deseja excluir este livro?')) {
            axios.delete(`${baseUrl}/${book.id}`)
                .then(resp => {
                    const list = this.state.list.filter(l => l!== book)
                    this.setState(list)
                })
            
            window.location.reload()
        }
    }

    refresh() {
        this.setState({ ...initialState })
    }

    renderForm() {
        return (
        <div>
            <div className="form-row">
                <div className="form-group col">
                    <label>Pesquisar por nome:</label>
                    <input type="text" className="form-control" id="title" placeholder="Digite o nome do livro"/>
                </div>
            </div>
            <div className="form-row">
            <button className="btn btn-primary d-flex ml-auto" onClick={() => this.refresh()}>Restaurar</button>
            <button className="btn btn-primary d-flex ml-3" onClick={() => this.searchBook()}>Pesquisar</button>
            </div>
        </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ano</th>
                        <th>Páginas</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(book => {
            return (
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.writer}</td>
                    <td>{book.year}</td>
                    <td>{book.pages}</td>
                    <td>
                        <button className="btn" onClick={() => this.delete(book)}>
                            <img className="row-icon" alt="Ícone de deletar" src={deleteIcon}/>
                        </button>
                        <Link to={`/alterar/${book.id}`}>
                            <button className="btn">
                                <img src={editIcon} className="row-icon" alt="Ícone de alterar"/>
                            </button>
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <React.StrictMode>
                {this.renderForm()}
                {this.renderTable()}
            </React.StrictMode>
        )
    }
}