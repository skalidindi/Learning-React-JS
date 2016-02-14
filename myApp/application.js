'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = {
   thumbnailData: [{
      title: 'Show Courses',
      number: 32,
      header: 'Learn React',
      description: 'React is a fantastic new library for rendering web pages.',
      imageUrl: 'http://formatjs.io/img/react.svg'
   }, {
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will help you speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
   }]
};

var element = _react2.default.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.container'));

// var Badge = React.createClass({
//    // render method must return jsx
//    render: function() {
//       return <button className="btn btn-primary" type="button">
//         {this.props.title}
//         <span className="badge">{this.props.number}</span>
//       </button>;
//    }
// });

var Badge = function (_React$Component) {
   _inherits(Badge, _React$Component);

   function Badge() {
      _classCallCheck(this, Badge);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
   }

   _createClass(Badge, [{
      key: 'render',
      value: function render() {
         return _react2.default.createElement("button", { className: "btn btn-primary", type: "button" }, this.props.title, _react2.default.createElement("span", { className: "badge" }, this.props.number));
      }
   }]);

   return Badge;
}(_react2.default.Component);

exports.default = HelloWorld;


var ThumbnailList = _react2.default.createClass({ displayName: "ThumbnailList",
   render: function render() {
      var list = this.props.thumbnailData.map(function (thumbnailProps) {
         return _react2.default.createElement(Thumbnail, _react2.default.__spread({}, thumbnailProps));
      });

      return _react2.default.createElement("div", null, list);
   }
});

var Thumbnail = _react2.default.createClass({ displayName: "Thumbnail",
   render: function render() {
      return _react2.default.createElement("div", { className: "col-sm-6 col-md-4" }, _react2.default.createElement("div", { className: "thumbnail" }, _react2.default.createElement("img", { src: this.props.imageUrl, alt: "thumbnail-icon" }), _react2.default.createElement("div", { className: "caption" }, _react2.default.createElement("h3", null, this.props.header), _react2.default.createElement("p", null, this.props.description), _react2.default.createElement("p", null, _react2.default.createElement(Badge, { title: this.props.title, number: this.props.number })))));
   }
});