function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("completed");

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.onclick = () => taskList.removeChild(li);

  const actionDiv = document.createElement("div");
  actionDiv.className = "task-actions";
  actionDiv.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(actionDiv);
  taskList.appendChild(li);

  input.value = "";
}
