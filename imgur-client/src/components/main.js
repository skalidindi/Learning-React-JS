import React from 'react';
import Header from './header';
import TopicList from './topic-list';

class Main extends React.Component {
  content() {
    if (this.props.children) {
      return this.props.children;
    }
    return <TopicList />;
  }

  render() {
    return (<div>
              <Header />
              {this.content()}
            </div>
          );
  }
}

Main.propTypes = { children: React.PropTypes.array };

export default Main;
