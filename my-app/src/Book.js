import React, { Component } from 'react';
class Book extends Component {
    render() {
        return (
          <div>
            <div><h4>{this.props.title}</h4></div>
          </div>
        );
    }
}
// // is it needed?
export default Book;