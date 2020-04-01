var test = require('tape');
var logic = require('../scripts/logic');

  
var state = [
  { id: -3, description: 'first todo', done: false },
  { id: -2, description: 'second todo', done: true },
  { id: -1, description: 'third todo', done: false },
];

  var objId = -2;
  var objId2 = -4;
  
  // test('Example test', function(t) {
  //   t.deepEqual(todos.length,todos.length, 'return same');
  //   t.end();
  // });

//--------------------------------------------------------------------------------------------------------------------

test('delete to do test', function(t) {

  let actual = logic.deleteTodo(state, objId).length;
  let expected = state.length - 1;
  t.equal(actual, expected, "delete one object from original array");
  t.end();
})

test('deleting right element', function(t) {

  let expected =   [{ id: -3, description: 'first todo', done: false },
                    { id: -1, description: 'third todo', done: false },]
  
  let actual = logic.deleteTodo(state, objId);
  t.deepEqual(actual, expected, "deleted id -2");
  t.end();
})

test('deleting right element', function(t) {

  let expected =   [{ id: -3, description: 'first todo', done: false },
                    { id: -2, description: 'second todo', done: true },
                    { id: -1, description: 'third todo', done: false },]
  
  let actual = logic.deleteTodo(state, objId2);
  t.deepEqual(actual, expected, "deleted id doesnt exist");
  t.end();
})

