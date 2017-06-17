var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Learn React'
        },
        {
          id: 4,
          text: 'Nettoyer caca a Molly'
        }
      ]
    };
  },
  handleAddTodo: function(text){
    var newTodos = this.state.todos;
    var id = newTodos.length + 1;
    var newTodo = {
      id: id,
      text: text
    };

    newTodos.push(newTodo);

    this.setState({
      todos: newTodos
    });

  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
