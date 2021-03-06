import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Book from './Book'

class BookSearch extends Component {

  state = {
    q: "",
    search_results: []
  }

  search(e) {
    let query = e.target.value

    this.setState({
      q: query,
      search_results: []
    })

    BooksAPI.search(query).then(books => {
      if (!books.error) {
        this.setState({
          search_results: books.map(book => this.updateBookShelf(book))
        })
      }
    })
  }

  updateBookShelf(book) {
    return this.props.books.reduce((book, b) => {
      if (book.id === b.id) {
        book.shelf = b.shelf
      }
      return book
    }, book)
  }

  render() {
    const { q, search_results } = this.state
    const { moveBookToShelf } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input value={q} onChange={(e) => this.search(e)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {search_results.map(book => (
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

export default BookSearch
