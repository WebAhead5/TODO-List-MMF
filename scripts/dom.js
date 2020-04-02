// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

 var state = [
      { id: -1, description: 'Delete me and start now!', done: false },
 ];

(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      console.log(todoNode)
      var markTodobtn = document.createElement('img')
      markTodobtn.src = './res/check-mark.png'
      // this changes the ui of the checkmarks and row colors when done.
      todoNode.setAttribute("id", todo.id)
      if(todo.done){
        todoNode.style.background = "red";
        markTodobtn.src = './res/cancel.png';

      } else {
        todoNode.style.background = "";
      }

      // this adds the delete button
      var deleteButtonNode = document.createElement('img');
      deleteButtonNode.src = './res/trash.png'
      deleteButtonNode.setAttribute("class", "deletebtn")
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, event.path[1].id);
        update(newState);
        console.log(newState)
      });
       todoNode.appendChild(deleteButtonNode);
       todoNode.appendChild(document.createTextNode(todo.description));
  
      // adds markTodo button 
      
        markTodobtn.setAttribute("class", "markbtn")

        markTodobtn.addEventListener('click', function(event) {
        var newState = todoFunctions.markTodo(state, event.path[1].id);
        update(newState)
      });
      todoNode.appendChild(markTodobtn);
      
      // add classes for css

      // reset input after submission TODO
      
  
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {

        addTodoForm.addEventListener('submit', function(event) {
            console.log(event.target.description.value);
            event.preventDefault();
            var description = event.target.description.value;
            var obj = Object.assign({},{description: description});
            var newState = todoFunctions.addTodo(state,obj);
            update(newState);
        });
    }
  
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
      console.log("line 62" + JSON.stringify(state));
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });

      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();