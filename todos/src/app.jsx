import React from 'react';
import ReactDOM from 'react-dom';
import '../index.html';
import '../sass/style';
import Header from './header';
import List from './list';

// no mixins support in es6 react so using re-base as wrapper for firebase api
import Rebase from 're-base';
const rootUrl = 'https://react-todos-app.firebaseio.com/';
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

  updateTodoDone = (todo, checked) => {
    const updatedTodos = this.state.todos;
    const index = updatedTodos.indexOf(todo);

    if (index !== -1) {
      const newTodo = todo;
      newTodo.done = checked;
      updatedTodos[index] = newTodo;
      this.setState({
        todos: updatedTodos,
      });
    }
  }

   render() {
     const todos = this.state.todos;
     return (<div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header addTodo={this.addTodoToStore} />
        <div
          className={`"content" ${(todos.length ? 'loaded' : '')}`}
        >
          <List items={this.state.todos}
            updateTodoDone={this.updateTodoDone}
          />
        </div>
      </div>
     </div>);
   }
}

const element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
