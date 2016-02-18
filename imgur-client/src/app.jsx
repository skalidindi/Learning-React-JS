import React from 'react';
import ReactDOM from 'react-dom';
// import ReactRouter from 'react-router';
// let Router = ReactRouter.Router;
// let Route = ReactRouter.Route;
import '../index.html';
import '../sass/style';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello</h1>;
  }
}

const element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
