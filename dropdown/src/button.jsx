// We need to show a button and a list
// This component should know when to show the list

import React from 'react';

class Button extends React.Component {

  render() {
    const defaultBtnClass = 'btn ';

    return (<button onClick={this.props.whenClicked}
      className={defaultBtnClass + this.props.className} type="button"
    >
      {this.props.title}
      <span className={this.props.subTitleClassName}>
        {this.props.subTitle}
      </span>
    </button>);
  }
}

Button.propTypes = { whenClicked: React.PropTypes.func,
  className: React.PropTypes.string, subTitleClassName: React.PropTypes.string,
  title: React.PropTypes.string, subTitle: React.PropTypes.string };
export default Button;
