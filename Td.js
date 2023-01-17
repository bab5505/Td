document.addEventListener('DOMContentLoaded', function(){
    const todoList = document.getElementById('todoList');
    const todoForm = document.getElementById('newTodoForm')

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTodo = document.createElement('li');
        newTodo.innerText = document.getElementById('task').value;

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Delete!';
        todoList.appendChild(newTodo);
        newTodo.appendChild(removeBtn);
        todoForm.reset();
      });

      todoList.addEventListener('click', function(e){
        const targetTagToLowerCase = e.target.tagName.toLowerCase();
        if (targetTagToLowerCase === 'li'){
          e.target.style.textDecoration = 'line-through';
        } else if (targetTagToLowerCase === 'button'){
          e.target.parentNode.remove();
        }
        localStorage.setItem('todoList', JSON.stringify(todoList))
    });
  });









// const form = document.querySelector('newTodo');
// const input = document.querySelector('todo');
// const todoList = document.querySelector('todoList');

// todoList.addEventListener('click', function(e){
//     if(e.target.tagName === 'BUTTON');{
//        e.target.parentElement.remove();
//     }
// })

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const addTodo = document.createElement('ul');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'Delete!';
  
//     addTodo.innerText = input.value;
//     addTodo.appendChild(removeBtn);
//     todoList.appendChild(addTodo);
//     input.value = '';

// });


