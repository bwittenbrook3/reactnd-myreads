import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookList from './BookList'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      if (books) {
        this.setState({
          books: books
        });
      }
    })
  }

  moveBookToShelf = (book, toShelf) => {
    console.log(book)
    this.setState(state => {
      let { books } = state

      // Add the book if it is not already in our state
      let book_ids = books.map(book => book.id)
      if (!book_ids.includes(book.id))
        books = books.concat([ book ])

      // Update the shelf of the book
      books = books.map(b => {
        if (b.id === book.id) {
          b.shelf = toShelf
        }
        return b
      })


      return (
        {
          ...state,
          books: books
        }
      )
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch
            books={books}
            moveBookToShelf={this.moveBookToShelf}
          />
        )} />
        <Route exact path="/" render={() => (
          <BookList
            books={books}
            moveBookToShelf={this.moveBookToShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
