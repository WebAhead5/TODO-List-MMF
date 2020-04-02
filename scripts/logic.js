//Array of errors that functions could return
const errors = {
    0: "Invalid input",
    1: "Invalid element number",
    2: "Description is too long",
    3: "Description is empty",
    4: "Element you try to delete is not exist"
}

/*
sorting function, which you can use to sort an array of objects,
whose values are either strings or numbers.
This function has two parameters —
the key we want to sort by and the order of the results
(i.e. ascending or descending)
Example for use it in sort function:
todos.sort(compareValues('id'));
todos.sort(compareValues('done', 'desc'));
*/
var compareFunction = function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

var todoFunctions = {

    generateId: (function() {
      var idCounter = 0;
  
      function incrementCounter() {
        return (idCounter += 1);
      }
      return incrementCounter;
    })(),

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

      if(!Array.isArray(todos) || isNaN(idToDelete)){
          return errors[0]
      }

      var result =  this.cloneArrayOfObjects(todos).filter(function(todoid) {
        return todoid.id !== Number(idToDelete)
        });

      if(!JSON.stringify(todos).localeCompare(JSON.stringify(result))){
        return errors[4];
      }

      return result;
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
       if(!Array.isArray(todos) || typeof sortFunction != 'function' ){
           return errors[0];
       }

       var sortedArray = todos.slice().sort(sortFunction);

       return sortedArray;
    },
  };

if (typeof module !== 'undefined') {
  module.exports = {todoFunctions,errors,compareFunction};
}