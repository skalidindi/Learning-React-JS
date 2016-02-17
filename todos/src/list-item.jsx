import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.item.text,
      textChanged: false,
    };
  }

  handleCheckboxChange = (event) => {
    this.props.updateTodoDone(this.props.item, event.target.checked);
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.item);
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
      textChanged: true,
    });
  }

  handleUndoClick = () => {
    this.setState({
      textChanged: false,
    });
  }

  handleSaveClick = () => {
    this.props.updateTodoText(this.props.item, this.state.text);
    this.setState({
      textChanged: false,
    });
  }

  changesButtons() {
    if (!this.state.textChanged) {
      return null;
    }
    return [
      <button key={1} className="btn btn-default" onClick={this.handleSaveClick}>
        Save
      </button>,
      <button key={2} className="btn btn-default" onClick={this.handleUndoClick}>
        Undo
      </button>,
    ];
  }

  render() {
    return (<div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox" onChange={this.handleCheckboxChange}
          checked={this.props.item.done}
        />
      </span>
      <input type="text" className="form-control"
        value={this.state.textChanged ? this.state.text : this.props.item.text}
        onChange={this.handleTextChange}
        disabled={this.props.item.done}
      />
    <span className="input-group-btn">
      {this.changesButtons()}
      <button className="btn btn-default" onClick={this.handleDelete}>
        Delete
      </button>
    </span>
    </div>);
  }
}

ListItem.propTypes = { item: React.PropTypes.object,
  updateTodoDone: React.PropTypes.func,
  updateTodoText: React.PropTypes.func,
  deleteTodo: React.PropTypes.func };

export default ListItem;
