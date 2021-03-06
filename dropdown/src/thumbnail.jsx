import React from 'react';
import Badge from './badge';

class Thumbnail extends React.Component {
  render() {
    return (<div className="col-sm-6 col-md-4">
       <div className="thumbnail">
          <img src={this.props.imageUrl} alt="thumbnail-icon"/>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
                <Badge title={this.props.title} number={this.props.number}/>
            </p>
          </div>
        </div>
     </div>);
  }
}

Thumbnail.propTypes = { header: React.PropTypes.string,
  description: React.PropTypes.string, title: React.PropTypes.string,
  number: React.PropTypes.number, imageUrl: React.PropTypes.string };
export default Thumbnail;
