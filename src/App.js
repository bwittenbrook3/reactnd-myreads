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
      this.setState({
        books: books
      });
    })
  }

  moveBookToShelf = (book, toShelf) => (
    this.setState(state => {
      return (
        {
          ...state,
          books: state.books.map(b => {
            if (b.id === book.id) {
              b.shelf = toShelf
            }
            return b
          })
        }
      )
    })
  )

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch />
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
