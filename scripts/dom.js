// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

 var state = [
      { id: -1, description: 'Delete me and start now!', done: false },
 ];

 var sortAsec = false;

(function() {
    // This is the dom node where we will keep our todo

    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    // This function takes a todo, it returns the DOM node representing that todo

    var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var markTodobtn = document.createElement('img');

    // init uncheck box
    markTodobtn.src = '../res/empty.png';

    // this changes the ui of the checkmarks and row colors when done
    todoNode.setAttribute("id", todo.id)
    if(todo.done){
      //if the box is clicked change to a checked box and change the background color.
      todoNode.style.background = "red";
      todoNode.style.textDecoration = "lineThrough"
      markTodobtn.src = '../res/checkbox.png';
      } else {
        todoNode.style.background = "";
      }

      // this adds the delete button
      var deleteButtonNode = document.createElement('img');
      deleteButtonNode.src = '../res/trash.png'
      deleteButtonNode.setAttribute("class", "deletebtn")
      deleteButtonNode.addEventListener('click', function(event) {

       var newState = todoFunctions.deleteTodo(state, event.path[1].id);
       update(newState);

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

      // adds sort button
      
      
      // reset input after submission TODO
      
  
      return todoNode;
    };
    
    var sortBtn = document.querySelector('.sortBy')
      sortBtn.addEventListener('click', function(event) {
        var newState;
        if(sortAsec) {
          newState = todoFunctions.sortTodos(state, compareFunction("id"));
        } else {
          newState = todoFunctions.sortTodos(state, compareFunction("id", "desc"));
        }
        sortAsec = !sortAsec;
        update(newState)
      })

    // bind create todo form
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var description = event.target.description.value;
            addTodoForm.reset();
            var obj = Object.assign({},{description: description});
            var newState = todoFunctions.addTodo(state,obj);
            if(Array.isArray(newState)){
                update(newState);
            }else{
                alert(newState)
            }
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
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });

      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();