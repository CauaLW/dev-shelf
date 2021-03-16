const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const dbBooks = require('./db/book')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/livros', dbBooks.getBook)
app.get('/livros/:id', dbBooks.getBookById)
app.post('/livros', dbBooks.createBook)
app.put('/livros/:id', dbBooks.updateBook)
app.delete('/livros/:id', dbBooks.deleteBook)

app.listen(3001, () => {
    console.log('Server running at port 3001')
})
