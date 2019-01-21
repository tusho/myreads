import React from 'react'
import './App.css'
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  handleEvent = (e) => {
      alert(e.target.value)
    };


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {

                }
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title="Currently Reading" books={this.state.books} handleEvent={this.handleEvent} books={this.state.books.filter(book => book.shelf === 'currentlyReading')}/>
              <BookShelf title="Want to Read" books={this.state.books} handleEvent={this.handleEvent} books={this.state.books.filter(book => book.shelf === 'wantToRead')}/>
              <BookShelf title="Read" books={this.state.books} handleEvent={this.handleEvent} books={this.state.books.filter(book => book.shelf === 'read')}/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
