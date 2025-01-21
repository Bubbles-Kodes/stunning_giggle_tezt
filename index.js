const todos = [
    { 
      title: "Initial Todo", 
      description: "This is the initial todo", 
      complete: false, 
    }
  ]; 
  
  function addTodo(title, description) {
     const newTodo = { 
      title: title, 
      description: description, 
      complete: false, 
    }; 
    todos.push(newTodo); 
  } 
  
  function removeTodo(index) { 
    if (index >= 0 && index < todos.length) {
       todos.splice(index, 1); 
      } else { 
        console.log("Invalid index for removal.");
       } 
    } 
      
  function editTodo(index, newTitle, newDescription) { 
    if (index >= 0 && index < todos.length) { 
      todos[index].title = newTitle; 
      todos[index].description = newDescription; 
    } else { console.log("Invalid index for editing."); 
    } 
  } 
  
  function markTodoComplete(index) { 
    if (index >= 0 && index < todos.length) { 
      todos[index].complete = true; 
    } else { 
      console.log("Invalid index for marking complete."); 
    } 
  } 
  
  function displayTodoLength() { 
    console.log("Total Todos:", todos.length); 
  
  } 
  
  function countCompletedTodos() { 
    return todos.reduce((count, todo) => todo.complete ? count + 1 : count, 0); 
  } 
  
  function app() { 
    console.log('Welcome to the Todo Application'); 
    console.log('================================'); 
    
    // Add todos 
    addTodo("Go to the gym", "Workout for 30 minutes"); 
    addTodo("Buy groceries", "Milk, eggs, bread"); 
    addTodo("Explore your creativity", "Draw, paint, sing"); 
    
    // Remove first todo 
    removeTodo(0); 
    
    // Edit todo 
    editTodo(0, "Go for a run", "Run for 2 miles"); 
    
    // Mark todo as complete 
    markTodoComplete(1); 
    
    console.log('Here is a list of your todos:'); 
    displayTodoLength(); 
    
    for (let i = 0; i < todos.length; i++) { 
      const todo = todos[i]; 
      console.log(`Todo ${i + 1}`); 
      console.log(` Title: ${todo.title}`); 
      console.log(` Description: ${todo.description}`); 
      console.log(` Completed: ${todo.complete ? 'Yes' : 'No'}`); 
      console.log('------------------'); 
    } 
    
    console.log(`Completed Todos: ${countCompletedTodos()}`); 
  } 
  
  app();