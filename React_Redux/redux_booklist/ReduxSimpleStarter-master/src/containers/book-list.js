import React, { Component } from 'react';
import { connect } from 'react-redux'; //glue between react and redux
        //makes connect function available
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
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
  // whatever is returned inside of BookList
  return{
    books: state.books
  };
}

// anything returned from this function will end up as
// props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of our reducers  -- bindActionCreators, dispatches info
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// promote BookList from a component to a container- it needs to know
// about this new dispatch method, selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function and a Component and creates a container
//a container is a component is aware of the state that is contained by redux
