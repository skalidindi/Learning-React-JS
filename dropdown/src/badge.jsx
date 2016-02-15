import React from 'react';

class Badge extends React.Component {
  render() {
    return (<button className="btn btn-primary" type="button">
      {this.props.title}
      <span className="badge">{this.props.number}</span>
    </button>);
  }
}
Badge.propTypes = { title: React.PropTypes.string,
  number: React.PropTypes.number };
Badge.defaultProps = { title: '',
  number: 0 };
export default Badge;
