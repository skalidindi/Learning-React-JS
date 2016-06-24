import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book =>
      <li
        key={book.title}
        onClick={ () => this.props.selectBook(book) }
        className="list-group-item"
      >
        {book.title}
      </li>
    );
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

BookList.propTypes = {
  books: React.PropTypes.array,
  selectBook: React.PropTypes.func,
};

// Whatever is returned will show up as props inside of BookList
const mapStateToProps = (state) => ({ books: state.books });

// Anything returned from mapDispatchToProps will end up as props on the
// BookList container.
// Whenever selectBook is called, the result should be passed to all our
// reducers.
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectBook }, dispatch);

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
