import React, { Component } from 'react';
import { connect } from 'react-redux'; //glue between react and redux
        //makes connect function available
class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//the glue between react and redux
function mapStateToProps(state) {
  return{
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
//connect takes a function and a Component and creates a container
//a container is a component is aware of the state that is contained by redux
