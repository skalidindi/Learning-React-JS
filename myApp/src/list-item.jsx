// We need to show a button and a list
// This component should know when to show the list

import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li><a>{this.props.item}</a></li>;
  }
}

ListItem.propTypes = { item: React.PropTypes.string };
export default ListItem;
