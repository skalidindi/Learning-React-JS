import React from 'react';
import ReactDOM from 'react-dom';
import '../index.html';
import '../sass/style';

class Hello extends React.Component {
   render() {
     return (<h1 className={`red`}>
       Hello!
     </h1>);
   }
}

const element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
