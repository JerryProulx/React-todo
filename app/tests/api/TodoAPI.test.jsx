var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid todos array', ()=>{
      var todos = [
        {
          id: 1,
          text: 'This is the text',
          completed: false
        }];
        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem('todos'));

        expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', ()=>{
      var badTodos = {a: 'b'};

        TodoAPI.setTodos(badTodos);

        expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', ()=>{
    it('should return empty array for bad localstorage data', ()=>{
      var actualTodos = TodoAPI.getTodos('todos');

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage', ()=>{
      var todos = [
        {
          id: 1,
          text: 'This is the text',
          completed: false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));

        expect(TodoAPI.getTodos()).toEqual(todos);
    });
  });
});
