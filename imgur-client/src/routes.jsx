import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/main';

class Routes extends React.Component {
  render() {
    return (<Router history={browserHistory}>
              <Route path="/" component={Main}/>
            </Router>
           );
  }
}

Routes.propTypes = { };

export default Routes;
