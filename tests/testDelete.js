var test = require('tape');
var {todoFunctions:logic,errors} = require('../scripts/logic');

test('Delete one element from the array while idToDelete is number', function(t) {
  var todos =
    [
      {id: 0, description: 'make tea', done: false},
      {id: 1, description: 'make eggs', done: true},
    ]
  var idToDelete = 0;
  var expected = [
      {id: 1, description: 'make eggs', done: true},
  ]

  var actual = logic.deleteTodo(todos, idToDelete)
  t.deepEqual(actual, expected, 'element id = 0 should deleted from the array');
  t.end();
});

test('Delete one element from the array while idToDelete is number as string', function(t) {
   var todos =
      [
        {id: 0, description: 'make tea', done: false},
        {id: 1, description: 'make eggs', done: true},
      ]
    var idToDelete = '0';
    var expected = [
        {id: 1, description: 'make eggs', done: true},
    ]

    var actual = logic.deleteTodo(todos, idToDelete)
    t.deepEqual(actual, expected, 'element id = 0 should deleted from the array');
    t.end();
});

test('Trying to delete element with idToDelete not exist ', function(t) {
   var todos =
      [
        {id: 0, description: 'make tea', done: false},
        {id: 1, description: 'make eggs', done: true},
      ]
    var idToDelete = 2;
    var expected = errors[4];

    var actual = logic.deleteTodo(todos, idToDelete)
    t.deepEqual(actual, expected, 'idToDelete is not exist');
    t.end();
});

test('Invalid argument array ', function(t) {
   var todos = "lll";
    var idToDelete = '0';
    var expected =  errors[0];
    var actual = logic.deleteTodo(todos, idToDelete)
    t.deepEqual(actual, expected, 'error number 0');
    t.end();

});

test('Invalid idToDelete input ', function(t) {

  var todos =
        [
          {id: 0, description: 'make tea', done: false},
          {id: 1, description: 'make eggs', done: true},
        ]

  var idToDelete = 'abcdef';
  var expected =  errors[0];
  var actual = logic.deleteTodo(todos, idToDelete)
  t.deepEqual(actual, expected, 'error number 0');
  t.end();
});
