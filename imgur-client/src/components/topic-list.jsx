import React from 'react';
import Api from '../utils/api';

class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
  }
  componentWillMount() {
    Api.get('topics/defaults')
      .then((data) => this.setState({ topics: data.data }));
  }

  renderTopics() {
    console.log(this.state.topics.map((topic) => <li>{topic}</li>));
    return <div>Hello</div>;
    // return this.state.topics.map((topic) => <li>{topic}</li>);
  }

  render() {
    return (<div className="list-group">
              Topic List
              {this.renderTopics()}
            </div>
          );
  }
}

TopicList.propTypes = { };

export default TopicList;
