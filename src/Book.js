import React, { Component } from 'react'

class Book extends Component {

  moveShelves(event) {
    const toShelf = event.target.value;
    this.props.moveBookToShelf(this.props.book, toShelf)
  }

  render() {
    const { book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`
            }}></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf || 'none'}
              onChange={(event) => this.moveShelves(event)}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(" and ")}</div>
      </div>
    )
  }
}

export default Book
