var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('AddTodo', ()=>{
  it('should exist', ()=>{
    expect(AddTodo).toExist();
  });

  it('should call on AddTodo prop with valid data', ()=>{
    var text = 'Check mail';

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = text;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(text);
  });

  it('should not call on AddTodo prop with valid data', ()=>{
    var text = '';

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = text;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
