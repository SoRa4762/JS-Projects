document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      const taskText = document.createElement("span");
      taskText.textContent = task;
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editTask(index));
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteTask(index));
      taskItem.appendChild(taskText);
      taskItem.appendChild(editBtn);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
    });
  };

  const addTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (taskInput.value.trim()) {
      tasks.push(taskInput.value.trim());
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";
      loadTasks();
    }
  };

  const editTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const newTask = prompt("Edit task", tasks[index]);
    if (newTask !== null) {
      tasks[index] = newTask.trim();
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    }
  };

  const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  };

  addTaskBtn.addEventListener("click", addTask);

  loadTasks();
});
