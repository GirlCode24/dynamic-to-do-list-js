// Wait until the DOM is fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Select necessary DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 2: Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input text

    if (taskText === "") {
      alert("Please enter a task."); // Alert if input is empty
      return;
    }

    // Create a new <li> element for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Set up the remove functionality
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to <li>, then <li> to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Step 3: Add event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // Step 4: Add 'Enter' key functionality
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});
