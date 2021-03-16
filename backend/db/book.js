const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'devshelf',
    password: '123456',
    port: 5432
})

const getBook = (req, res) => {
    pool.query('select * from book order by id', (err, resul) => {
        if(err) throw err

        res.json(resul.rows)
    })
}

const getBookById = (req, res) => {
    const id = parseInt(req.params.id)
    
    pool.query('select * from book where id = $1', [id], (err, resul) => {
        if(err) throw err
        res.send(resul.rows[0])
    })
}

const createBook = (req, res) => {
    const { title, writer, year, pages } = req.body

    pool.query('insert into book (title, writer, year, pages) values($1, $2, $3, $4)', [title, writer, year, pages], (err, resul) => {
        if(err) res.status(500).send()
        res.status(200).send()
    })
}

const updateBook = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, writer, year, pages } = req.body

    pool.query('update book set title = $1, writer = $2, year = $3, pages = $4 where id= $5', [title, writer, year, pages, id], (err, resul) => {
        if(err) res.send(err) 
    })
}

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('delete from book where id = $1', [id], (err, resul) => {
        if(err) throw err
    })
}

module.exports = {
    getBook,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}