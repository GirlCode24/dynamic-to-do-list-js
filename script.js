document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create <li> and set text content
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn'; // ✅ Using className instead of classList.add()

    // Remove the task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to <li>, then append <li> to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add event listener for Add button
  addButton.addEventListener('click', addTask);

  // Add event listener for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
