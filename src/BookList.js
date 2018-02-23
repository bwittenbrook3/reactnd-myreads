import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class BookList extends Component {

  state = {
    shelves: [
      {
        id: "currentlyReading",
        name: "Currently Reading"
      },
      {
        id: "wantToRead",
        name: "Want to Read"
      },
      {
        id: "read",
        name: "Read"
      }
    ]
  }

  render() {
    const { shelves } = this.state
    const { books, moveBookToShelf } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <BookShelf
              key={shelf.id}
              books={books}
              shelf={shelf}
              moveBookToShelf={moveBookToShelf}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList
