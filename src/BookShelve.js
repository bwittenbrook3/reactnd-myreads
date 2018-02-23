import React, { Component } from 'react'
import Book from './Book'

class BookShelve extends Component {

  render() {
    const { books, shelve } = this.props

    const books_on_shelve = books.filter(book =>
      book.shelf === this.props.shelve.id
    )

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelve.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books_on_shelve.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )

  }
}

export default BookShelve
