
import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown';
import '../index.html';

// dropdown
const options = {
  title: 'Choose a desert',
  items: ['Apple Pie', 'Peach Cobbler', 'Cononut Cream Pie'],
};

const element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.container'));
