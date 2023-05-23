document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      const task = input.value.trim();
      if (task !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        todoList.appendChild(listItem);
        input.value = "";
      }
    });
  
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        addButton.click();
      }
    });
  });
  