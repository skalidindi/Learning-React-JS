import React from 'react';

import ListItem from './list-item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return (<h4>
        Add a todo to get started.
      </h4>);
    }
    // else
    const children = [];

    this.props.items.map(
      (item, i) => {
        children.push(
          <ListItem key={i} item={item}
            updateTodoToStore={this.props.updateTodoToStore}
          >
            {item.text}
          </ListItem>
        );
      }
    );
    return children;
  }

  render() {
    return (<ul>
      {this.renderList()}
    </ul>
  );
  }
}

List.propTypes = { items: React.PropTypes.array,
  updateTodoToStore: React.PropTypes.func };

export default List;