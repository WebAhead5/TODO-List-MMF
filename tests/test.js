var test = require('tape');
var logic = require('../scripts/logic');


test('add element for an empty array', function(t) {
  var todos = []
  var element = { description: 'make tea'}
  var expected = [
    { description: 'make tea', "Done": false}
  ]
  var actual = logic.addTodo(todos, element)
  actual.map((value)=> {delete value.id; return value})
  t.deepEqual(actual, expected, 'should be equal');
  t.end();
});

test('add element for not an empty array', function(t) {
  var todos = [{ description: 'make tea' }];
  var makeEggs = { description: 'make eggs' };
  var expected = [
    { description: 'make tea' },
    { description: 'make eggs', "Done": false }
  ]
  var actual = logic.addTodo(todos, makeEggs)
  actual.map((value)=> {delete value.id; return value})
  t.deepEqual(actual, expected, 'should be equal');
  t.end();
});

test('delete to do test', function(t) {
  var state = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false },
    { id: -1, description: 'third todo', done: false },
  ]
  var objId = -2; 
  let actual = logic.deleteTodo(state, objId);
  console.log(actual)
  let expected = state.length - 1;
  t.equal(actual, expected, "delete one object from original array");
  t.end();
  }) 






