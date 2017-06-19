var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = ()=>{
      var message = 'Created ';
      var timestamp = createdAt;

      if(completedAt){
        message = 'Completed At ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return(
      <div className={todoClassName} onClick={()=>{this.props.onToggle(id);}}>
        <div>
          <input className="todo__checkbox" type="checkbox" checked={completed} />
        </div>
        <div>
          <p className="todo__text">{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
