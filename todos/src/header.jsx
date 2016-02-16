import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleClick = () => {
    const item = {
      text: this.state.text,
      done: false,
    };
    this.props.addTodo(item);
  }

  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (<div className="input-group">
      <input type="text" className="form-control"
        value={this.state.text} onChange={this.handleInputChange}
      />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.handleClick}>
          Add
        </button>
      </span>
    </div>);
  }
}

Header.propTypes = { addTodo: React.PropTypes.func };

export default Header;
