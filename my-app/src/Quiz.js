import React, { Component } from 'react';
import Book from './Book';

class Quiz extends Component {
    render() {
      console.log(this);
      return (
        <div>
          {this.props.books.map((b) => {
             return <Book title={b} />
           }
         )}
         <Book />
       </div>
      );
    }
  }

export default Quiz;