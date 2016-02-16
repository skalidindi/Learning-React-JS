import React from 'react';
import ReactDOM from 'react-dom';
import '../index.html';
import '../sass/style';
import Header from './header';

// no mixins support in es6 react so using re-base as wrapper for firebase api
import Rebase from 're-base';
const rootUrl = 'https://luminous-inferno-7251.firebaseio.com/';
const base = Rebase.createClass(rootUrl);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentWillMount() {
    base.syncState(`todos`, {
      context: this,
      state: 'todos',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTodoToStore = (todo) => {
    this.setState({
      todos: this.state.todos.concat([todo]),
    });
  }

  removeTodoFromStore = (todoToDelete) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo !== todoToDelete),
    });
  }
        // <Header itemsStore={this.state.items} />
   render() {
     return (<div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header addTodo={this.addTodoToStore} />
      </div>
     </div>);
   }
}

const element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
