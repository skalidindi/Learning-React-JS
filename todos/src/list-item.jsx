import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.item.text,
    };
  }

  // componentDidMount() {
  // }
  handleInputChange = (event) => {
    console.log(event.target);
  }

  handleCheckboxChange = (event) => {
    // const todo = this.props.item;
    // todo.done = event.target.value;
    this.props.updateTodoToStore(this.props.item, event.target.checked);
  }

  render() {
    return (<div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox" onChange={this.handleCheckboxChange}/>
      </span>
      <input type="text" className="form-control"
        value={this.state.text}
        onChange={this.handleInputChange}
      />
    <span className="input-group-btn">
      <button className="btn btn-default">
        Delete
      </button>
    </span>
    </div>);
  }
}

ListItem.propTypes = { item: React.PropTypes.object,
  updateTodoToStore: React.PropTypes.func };

export default ListItem;
