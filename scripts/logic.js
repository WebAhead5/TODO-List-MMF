// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

const errors = {
    0: "invalid input",
    1: "Invalid element number",
    2: "description is too long",
    3: "description is empty"
}

var todoFunctions = {

    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
      var idCounter = 0;
  
      function incrementCounter() {
        return (idCounter += 1);
      }
      return incrementCounter;
    })(),
    
    //cloneArrayOfObjects will create a copy of the todos array 
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
      return todos.map(function(todo){
        return JSON.parse(JSON.stringify(todo));
      });
    },
    
    addTodo: function(todos, newTodo) {

        if(!Array.isArray(todos) || typeof newTodo != 'object'){
            return errors[0]
        }

        if(newTodo.description.trim().length == 0){
            return errors[3];
        }

        if(newTodo.description.trim().length > 60){
          return errors[2];
        }

        var newObj = todoFunctions.cloneArrayOfObjects(todos);
        newTodo.Done = false;
        newTodo.id = this.generateId()

        return newObj.concat(newTodo)
    },


    deleteTodo: function(todos, idToDelete) {
      return this.cloneArrayOfObjects(todos).filter(function(todoid) {
        return todoid.id !== Number(idToDelete)
        }); 
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // return a new array, this should not contain any todo with an id of idToDelete
      // hint: array.filter
    },
    markTodo: function(todos, idToMark) {

        if(!Array.isArray(todos) || isNaN(idToMark)){
            return errors[0];
        }


        var result = todoFunctions.cloneArrayOfObjects(todos);
        result.map(function(value){
            if(value.id == idToMark)
                value.done = !value.done
        });

        return result;
    },
    sortTodos: function(todos, sortFunction) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort
    },
  };
  
// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = {todoFunctions,errors};
}