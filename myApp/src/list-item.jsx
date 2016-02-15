// We need to show a button and a list
// This component should know when to show the list

import React from 'react';

class ListItem extends React.Component {

  handleClick = () => {
    this.props.whenItemClicked(this.props.item);
  }

  render() {
    return (<li className={this.props.className}>
            <a onClick={this.handleClick}>{this.props.item}</a>
           </li>);
  }
}

ListItem.propTypes = { item: React.PropTypes.string,
  whenItemClicked: React.PropTypes.func, className: React.PropTypes.string };
export default ListItem;
