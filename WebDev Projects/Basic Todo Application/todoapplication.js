let todoItemsContainer = document.getElementById('todoItemsContainer');
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoList() {
    let stringifiedList = localStorage.getItem("todoList");
    let parsed = JSON.parse(stringifiedList);
    if (parsed === null) {
        return [];
    } else {
        return parsed;
    }
}
let todoList = getTodoList();
let todosCount = todoList.length;

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqNo;
    let labelId = "label" + todo.uniqNo;
    let todoId = "todo" + todo.uniqNo;
    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");

    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };

    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container", "d-flex", "flex-row");

    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }
    labelElement.id = labelId;
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;

    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add('delete-icon-container');

    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

function onAddTodo() {
    let userInputElement = document.getElementById('todoUserInput');
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter Valid text");
        return;
    } else {
        todosCount = todosCount + 1;
        let newTodo = {
            text: userInputValue,
            uniqNo: todosCount,
            isChecked: false,
        };
        todoList.push(newTodo);
        createAndAppendTodo(newTodo);
        userInputElement.value = "";
    }
}
addTodoButton.onclick = function() {
    onAddTodo();
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
    let itemIndex = todoList.findIndex(function(eachItem) {
        let itemTodoId = "todo" + eachItem.uniqNo;
        if (itemTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    let todoObject = todoList[itemIndex];
    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }
    // if(checkboxElement.checked === true){
    //     labelElement.classList.add("checked");
    // }
    // else{
    //     labelElement.classList.remove("checked");
    // }
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let itemIndex = todoList.findIndex(function(eachItem) {
        let itemTodoId = "todo" + eachItem.uniqNo;
        if (itemTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    todoList.splice(itemIndex, 1);
}
saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};


for (let eachtodo of todoList) {
    createAndAppendTodo(eachtodo);
}