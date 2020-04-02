var test = require('tape');
var logic = require('../scripts/logic');
var errors = require('../const/errors');

test('Example test', function(t) {

  t.pass();
  t.end();
});

test("Check an empty array", function(t) {
  var todos =[]
  const actual = logic.markTodo(todos, 0);

  var expected = [];

  //Check if all done is true
  t.deepEqual(actual,expected, "An empty array returns an empty array");
  t.end();
});

test("Toggle one elements to done true", function(t) {
  var todos =
  [
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make eggs', done: true},
  ]

  const actual = logic.markTodo(todos, 0);

  var expected =
   [
     {id: 0, description: 'make tea', done: true},
     {id: 1, description: 'make eggs', done: true},
   ]
   t.equal(expected.length,todos.length, "Arrays length is not equal");

  //Check if elements values except done is equal
  var actualWithoutDone = actual.map(function(value){
    let obj = Object.assign({},value);
    delete obj.done;
    return  obj
  });
  var expectedWithoutDone =
  [
    {id: 0, description: 'make tea'},
    {id: 1, description: 'make eggs'},
  ]
  t.deepEqual(actualWithoutDone,expectedWithoutDone, "Something has changed in the elements except done")

  //Check if all done is true
  t.deepEqual(actual,expected, "should toggle done in element number 0");
  t.end();
});

test("Toggle one elements to done false", function(t) {
  var todos =
  [
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make eggs', done: true},
  ]

  const actual = logic.markTodo(todos, 1);

  var expected =
   [
     {id: 0, description: 'make tea', done: false},
     {id: 1, description: 'make eggs', done: false},
   ]
   t.equal(expected.length,todos.length, "Arrays length is not equal");

  //Check if elements values except done is equal
  var actualWithoutDone = actual.map(function(value){
    let obj = Object.assign({},value);
    delete obj.done;
    return  obj
  });
  var expectedWithoutDone =
  [
    {id: 0, description: 'make tea'},
    {id: 1, description: 'make eggs'},
  ]
  t.deepEqual(actualWithoutDone,expectedWithoutDone, "Something has changed in the elements except done")

  //Check if all done is true
  t.deepEqual(actual,expected, "should toggle done in element number 0");
  t.end();
});

test("Toggle more than one element", function(t) {
  var todos =
  [
    {id: 0, description: 'make tea', done: false},
    {id: 0, description: 'make eggs', done: true},
  ]

  const actual = logic.markTodo(todos, 0);

  var expected =
   [
     {id: 0, description: 'make tea', done: true},
     {id: 0, description: 'make eggs', done: false},
   ]
   t.equal(expected.length,todos.length, "Arrays length is not equal");

  //Check if elements values except done is equal
  var actualWithoutDone = actual.map(function(value){
    let obj = Object.assign({},value);
    delete obj.done;
    return  obj
  });
  var expectedWithoutDone =
  [
    {id: 0, description: 'make tea'},
    {id: 0, description: 'make eggs'},
  ]
  t.deepEqual(actualWithoutDone,expectedWithoutDone, "Something has changed in the elements except done")

  //Check if all done is true
  t.deepEqual(actual,expected, "should toggle done in elements with id  0");
  t.end();
});

test('Invalid argument array ', function(t) {

  var todos = 'llll';
  var id = 6;

  var actual = logic.markTodo(todos, id);
  var expected = errors[0];

  t.equal(actual,expected, "error number 0 ");
  t.end();


});

test('Invalid item number argument ', function(t) {

  var todos = [
     {id: 0, description: 'make tea'},
     {id: 0, description: 'make eggs'},
  ]
  var id = 'p';

  var actual = logic.markTodo(todos, id);
  var expected = errors[0];

  t.equal(actual,expected, "error number 0 ");
  t.end();


});
