import React, { Component } from 'react'
import BookShelve from './BookShelve'
import { Link } from 'react-router-dom'

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
    const { books } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelve => (
            <BookShelve
              key={shelve.id}
              books={books}
              shelve={shelve}
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
