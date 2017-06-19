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

  describe('filterTodos', ()=>{
    var todos = [
      {
        id: 1,
        text: 'This text',
        completed: true
      },
      {
        id: 2,
        text: 'This is text',
        completed: true
      },
      {
        id: 3,
        text: 'This is the text',
        completed: false
      },
    ];

    it('should return all items if show completed is true', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should return incompleted todos if show completed is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'the');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(todos.length);
    });
  });
});
