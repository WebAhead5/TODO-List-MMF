var test = require('tape');
var logic = require('../scripts/logic');


test('add element for an empty array', function(t) {
  var todos = []
  var element = { description: 'make tea'}
  var expected = [
    { description: 'make tea', "Done": false}
  ]
  var actual = logic.addTodo(todos, element)
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
  t.deepEqual(actual, expected, 'should be equal');
  t.end();
});







