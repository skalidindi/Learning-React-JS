import React from 'react';
import ReactDOM from 'react-dom';
import ThumbnailList from './thumbnail-list';
import Dropdown from './dropdown';
import '../index.html';

// thumbnail
// var options = {
//    thumbnailData: [
//       {
//          title: 'Show Courses',
//          number: 32,
//          header: 'Learn React',
//          description: 'React is a fantastic new library for rendering web pages.',
//          imageUrl: 'http://formatjs.io/img/react.svg'
//       },
//       {
//          title: 'Show Courses',
//          number: 25,
//          header: 'Learn Gulp',
//          description: 'Gulp will help you speed up your development workflow.',
//          imageUrl: 'http://brunch.io/images/others/gulp.png'
//       }
//    ]
// };

// var element = React.createElement(ThumbnailList, options);
// ReactDOM.render(element, document.querySelector('.container'));

// dropdown
var options = {
   title: 'Choose a desert',
   items: [
      'Apple Pie',
      'Peach Cobbler',
      'Cononut Cream Pie'
   ]
};

var element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.container'));
