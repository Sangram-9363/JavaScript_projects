const inputBox = document.querySelector('#inputBox');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

let editTodo = null;
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText <= 0) {
        alert("Please enter to do task..")
        return false;
    }

    if (addBtn.value === 'Edit') {
        editTodo.target.previousElementSibling.innerHTML = inputBox.value;
        addBtn.value = "Add";
        inputBox.value = "";

    }
    else {
        // create a list element for show the to do tasks and append with body 

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = inputText;
        li.appendChild(p);

        // Create a edit button and add in list 

        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        // Create a delete button and add in list of to do

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Remove';
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        inputBox.value = "";
    }
}

const updateToDo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement)
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = 'Edit';
        editTodo = e;
    }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateToDo)
