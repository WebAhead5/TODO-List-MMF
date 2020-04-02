var test = require('tape');
var {todoFunctions:logic,errors} = require('../scripts/logic');

test('add element for an empty array', function(t) {
  var todos = []
  var element = { description: 'make tea'}
  var expected = [
    { description: 'make tea', "Done": false}
  ]
  var actual = logic.addTodo(todos, element)
  actual.map((value)=> {delete value.id; return value})
  t.deepEqual(actual, expected, 'element should be added as single object in the array');
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
  t.deepEqual(actual, expected, 'object should be added to the array');
  t.end();
});

test('adding an element with empty text description ', function(t) {
  var todos = [];
  var makeEggs = { description: '' };
  var expected = errors[3];
  var actual = logic.addTodo(todos, makeEggs)
  if(Array.isArray(actual)){
        actual.map((value)=> {delete value.id; return value})
  }
  t.deepEqual(actual, expected, 'should be equal');
  t.end();
});

test('Invalid argument array ', function(t) {

  var todos = 'llll';
  var makeEggs = { description: 'make eggs' };

  var actual = logic.addTodo(todos, makeEggs);
  var expected = errors[0];

  t.equal(actual,expected, "error number 0 ");
  t.end();


});

test('Invalid argument object ', function(t) {

  var todos = [];
  var makeEggs = 5;

  var actual = logic.addTodo(todos, makeEggs);
  var expected = errors[0];

  t.equal(actual,expected, "error number 0 ");
  t.end();


});

test('description is too long ', function(t) {

  var todos = [];
  var makeEggs = { description: "I".repeat(61) };

  var actual = logic.addTodo(todos, makeEggs);
  var expected = errors[2];

  t.equal(actual,expected, "error number 2 ");
  t.end();


});










