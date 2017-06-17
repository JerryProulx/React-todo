var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var text = this.refs.todoText.value;

    if(text.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="What do you need to do" ref="todoText"/>
          <button type="submit" className="button hollow expanded">Add todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
