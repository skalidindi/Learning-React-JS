import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestTopics } from '../actions';

class TopicList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestTopics());
  }

  renderTopics() {
    const list = this.props.topics.data.map(
      (item) => <li key={item.name}>{item.name}</li>
    );

    return (<ul>
       {list}
    </ul>);
  }

  render() {
    return (<div className="list-group">
              Topic List
              {this.renderTopics()}
            </div>
          );
  }
}

TopicList.propTypes = {
  topics: PropTypes.object.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { topic } = state;
  return {
    topics: topic,
  };
}

export default connect(mapStateToProps)(TopicList);
