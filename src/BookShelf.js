import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    const { books, shelf, moveBookToShelf } = this.props

    const books_on_shelf = books.filter(book =>
      book.shelf === shelf.id
    )

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books_on_shelf.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  moveBookToShelf={moveBookToShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )

  }
}

export default BookShelf
