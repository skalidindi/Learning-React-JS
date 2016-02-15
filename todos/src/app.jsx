import React from 'react';
import ReactDOM from 'react-dom';
import '../index.html';

class Hello extends React.Component {
   render() {
     return <h1 className='red'>
       Hello!
     </h1>
   }
}

let element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
