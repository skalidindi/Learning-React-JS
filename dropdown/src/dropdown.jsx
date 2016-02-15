// We need to show a button and a list
// This component should know when to show the list

import React from 'react';
import Button from './button';
import ListItem from './list-item';

class Dropdown extends React.Component {

  // on es5 this is instead a method getInitialState
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  handleItemClick = (item) => {
    this.setState({
      open: false,
      itemTitle: item,
    });
  }

  render() {
    const list = this.props.items.map((item, i) =>
      <ListItem item={item} key={i}
        whenItemClicked={this.handleItemClick}
        className={this.state.itemTitle === item ? 'active' : '' }
      />
    );
    const defaultDropmenuClass = 'dropdown-menu ';

    return (
      <div className="dropdown">
        <Button whenClicked={this.handleClick}
          className="btn-default" title={this.state.itemTitle || this.props.title}
          subTitleClassName="caret"
        />
        <ul className={defaultDropmenuClass +
          (this.state.open ? 'show' : '')}
        > {list}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = { items: React.PropTypes.array, title: React.PropTypes.string };
export default Dropdown;
