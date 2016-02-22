import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TopicActions from '../actions';

class TopicList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.actions.getTopics();
  }

  renderTopics() {
    // console.log(this.props.actions.getTopics());
    return <div>Hello</div>;
  }

  render() {
    // console.log(this.props);
    return (<div className="list-group">
              Topic List
              {this.renderTopics()}
            </div>
          );
  }
}
TopicList.propTypes = {
  topics: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log('Santosh');
  console.log(state);
  return {
    topics: state.topic,
  };
};
const mapDispatchToProps =
  (dispatch) => ({ actions: bindActionCreators(TopicActions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList);
