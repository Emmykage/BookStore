import React from 'react';
import Book from './Book';
import InputForm from './InputForm';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: [
        {
          id: 1,
          title: 'Book One',
          author: 'Author one',
        },
        {
          id: 2,
          title: 'Book Two',
          author: 'Author Two',
        },
        {
          id: 3,
          title: 'Book Three',
          author: 'Author Three',
        },
        {
          id: 4,
          title: 'Book Four',
          author: 'Author Five',
        },

      ],
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <>
        <div className="bookList">
          <ul>
            {collections.map((book) => (

              <Book key={book.id} title={book.title} author={book.author} id={book.id} />

            ))}

          </ul>

        </div>
        <div className="form">
          <InputForm />

        </div>

      </>
    );
  }
}
export default Books;
