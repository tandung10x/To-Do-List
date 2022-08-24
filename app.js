var todos = [];

function updateTodoList() {
    var eleTodoList = document.getElementById('todo-list');
    eleTodoList.innerHTML = '';

    for(var i=0; i<todos.length; i++) {
        eleTodoList.innerHTML += `
            <li>` + 
                todos[i] +
                `<span>
                    <i class="fas fa-check" id="check`+i+`" onClick= "onCheckClick(`+i+`)"></i>
                    <i class="fas fa-trash" onClick="onDeleteClick(`+i+`)"></i>
                </span>
            </li>`;
    }
    
    eleTodoList.innerHTML +='<button class="btn-clear" onClick="onClear()">Clear All</button>'
}

function onAddClick() {
    var newTodo = document.getElementById('newTodo').value;
    if(newTodo.trim()!='') todos.push(newTodo);

    updateTodoList();

    document.getElementById('newTodo').value = '';
}

function onDeleteClick(index) {
    todos.splice(index, 1);
    updateTodoList();
}

function onClear() {
    todos = [];
    updateTodoList();
}

let cnt = new Array(50).fill(0);
function onCheckClick(index) {
    let c = '#check' + index;
    if(cnt[index]%2==0) {
        $(c).css('color', 'green');
        cnt[index]++;
    }
    else {
        $(c).css('color', 'white');
        cnt[index]++;
    }
}