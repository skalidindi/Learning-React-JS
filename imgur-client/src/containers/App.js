import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from '../components/main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Router history={browserHistory}>
              <Route path="/" component={Main}/>
            </Router>);
  }
}

export default App;
