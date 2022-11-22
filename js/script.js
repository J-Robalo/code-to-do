/* Seleção de elementos */

const toDoForm = document.querySelector("#to-do-form");
const toDoInput = document.querySelector("#to-do-input");
const toDoList = document.querySelector("#to-do-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

/* Funções */

const saveToDo = (text) => {
  const toDo = document.createElement("div");
  toDo.classList.add("toDo");
};

/* Eventos */

toDoForm.addEventListener("Submit", (e) => {
  e.preventDefault();

  const inputValue = toDoInput.value;

  if (inputValue) {
    saveToDo(inputValue);
  }
});
