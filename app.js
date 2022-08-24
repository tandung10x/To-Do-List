var todos = [];

function updateTodoList() {
    var eleTodoList = document.getElementById('todo-list');
    eleTodoList.innerHTML = '';

    for(var i=0; i<todos.length; i++) {
        eleTodoList.innerHTML +='<li onClick="onTodoClick(' + i +')">'+todos[i]+'</li>';
    }
}

function onAddClick() {
    var newTodo = document.getElementById('newTodo').value;
    todos.push(newTodo);

    updateTodoList();

    document.getElementById('newTodo').value = '';
}

function onTodoClick(index) {
    todos.splice(index, 1);
    updateTodoList();
}