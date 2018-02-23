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
      console.log(books)
      this.setState({
        books: books
      });
    })
  }

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
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
