const input = document.getElementById("new-task");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

//stylize tasklist
taskList.style.display = "flex";
taskList.style.flexDirection = "column";
taskList.style.gap = "8px";

addTask.addEventListener("click", () => {
  console.log(input.value);
  //adding list
  const newTask = document.createElement("li");
  newTask.innerText = input.value;
  //stylize list
  newTask.style.listStyle = "none";
  newTask.style.display = "flex";
  newTask.style.gap = "8px";
  taskList.appendChild(newTask);

  //adding button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  newTask.appendChild(completeButton);

  //add eventlistener to button
  completeButton.addEventListener("click", () => {
    newTask.className = "completed"; //can only add one class
    //newTask.classList.add("notCompleted", "ohReally"); //can add multiple classes
    // newTask.remove();
  });
});
