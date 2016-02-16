import React from 'react';
import ReactDOM from 'react-dom';
import ReactFire from 'reactfire';
import Firebase from 'reactfire';
import '../index.html';
import '../sass/style';

const rootUrl = 'https://luminous-inferno-7251.firebaseio.com/';

class App extends React.Component {
  componentWillMount() {
    this.bindAsObject(new Firebase(`${rootUrl} + items/`), 'items');
  }

   render() {
     return (<h1 className={`red`}>
       Hello!
     </h1>);
   }
}

const element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
