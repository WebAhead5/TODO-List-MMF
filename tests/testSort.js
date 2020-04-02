var test = require('tape');
var {todoFunctions:logic,errors,compareFunction} = require('../scripts/logic');


test("Sort asc according to id", function(t) {
  var todos =
  [
    {id: 1, description: 'make tea', done: false},
    {id: 0, description: 'make eggs', done: true},
  ]
  const actual = logic.sortTodos(todos, compareFunction("id"));

  var expected =   [
    {id: 0, description: 'make eggs', done: true},
    {id: 1, description: 'make tea', done: false},
  ]
  t.deepEqual(actual,expected, "Return array sorted according to id asc");
  t.end();
});

test("Sort desc according to id", function(t) {
  var todos =
  [
      {id: 0, description: 'make eggs', done: true},
      {id: 1, description: 'make tea', done: false},
  ]
  const actual = logic.sortTodos(todos, compareFunction("id","desc"));

  var expected =
  [
      {id: 1, description: 'make tea', done: false},
      {id: 0, description: 'make eggs', done: true},
  ]
  t.deepEqual(actual,expected, "Return array sorted according to id desc");
  t.end();
});

test("Sort asc according to description", function(t) {
  var todos =
  [
    {id: 1, description: 'make tea', done: false},
    {id: 0, description: 'make eggs', done: true},
  ]
  const actual = logic.sortTodos(todos, compareFunction("description"));

  var expected =   [
    {id: 0, description: 'make eggs', done: true},
    {id: 1, description: 'make tea', done: false},
  ]
  t.deepEqual(actual,expected, "Return array sorted according to description asc");
  t.end();
});

test("Sort desc according to description ", function(t) {
  var todos =
  [
      {id: 0, description: 'make eggs', done: true},
      {id: 1, description: 'make tea', done: false},
  ]
  const actual = logic.sortTodos(todos, compareFunction("description","desc"));

  var expected =
  [
      {id: 1, description: 'make tea', done: false},
      {id: 0, description: 'make eggs', done: true},
  ]
  t.deepEqual(actual,expected, "Return array sorted according to description desc");
  t.end();
});

test("Sort asc according to done", function(t) {
  var todos =
  [
      {id: 0, description: 'make eggs', done: true},
      {id: 1, description: 'make tea', done: false},
  ]

  const actual = logic.sortTodos(todos, compareFunction("done"));

  var expected =
  [
      {id: 1, description: 'make tea', done: false},
      {id: 0, description: 'make eggs', done: true},
  ]
  t.deepEqual(actual,expected, "Return array sorted according to done asc");
  t.end();
});

test("Sort desc according to done ", function(t) {
  var todos =
  [
    {id: 1, description: 'make tea', done: false},
    {id: 0, description: 'make eggs', done: true},
  ]

  const actual = logic.sortTodos(todos, compareFunction("done","desc"));

  var expected =
  [
      {id: 0, description: 'make eggs', done: true},
      {id: 1, description: 'make tea', done: false},
  ]
  t.deepEqual(actual,expected, "Return array sorted according to done desc");
  t.end();
})

test('Invalid argument array ', function(t) {

  var todos = "lll";
  const actual = logic.sortTodos(todos, compareFunction("done","desc"));
  var expected = errors[0];

  t.equal(actual,expected, "error number 0 ");
  t.end();


});

test('Invalid sort function argument ', function(t) {

  var todos = [
     {id: 0, description: 'make tea'},
     {id: 0, description: 'make eggs'},
  ]
  var id = 'p';

  var actual = logic.sortTodos(todos, id);
  var expected = errors[0];

  t.equal(actual,expected, "error number 0 ");
  t.end();


});
