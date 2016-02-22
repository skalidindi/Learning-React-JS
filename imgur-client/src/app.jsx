import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import '../index.html';
import '../sass/style';
import configureStore from './stores/configureStore';
// import * as actions from './actions';
const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Provider store={store}>
      <Routes />
    </Provider>);
  }
}

const element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
