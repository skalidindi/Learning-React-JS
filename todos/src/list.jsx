import React from 'react';

import ListItem from './list-item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    if (this.props.items && this.props.items.length === 0) {
      return (<h4>
        Add a todo to get started.
      </h4>);
    }

    const children = [];
    this.props.items.map(
      (item) => {
        children.push(
          <ListItem key={item.key} item={item}
            updateTodoDone={this.props.updateTodoDone}
            updateTodoText={this.props.updateTodoText}
            deleteTodo={this.props.deleteTodo}
          >
            {item.text}
          </ListItem>
        );
      }
    );
    return children;
  }

  render() {
    return (<div>
      {this.renderList()}
    </div>
  );
  }
}

List.propTypes = { items: React.PropTypes.array,
  updateTodoDone: React.PropTypes.func,
  updateTodoText: React.PropTypes.func,
  deleteTodo: React.PropTypes.func };

export default List;
