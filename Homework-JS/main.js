const container1 = document.getElementById("box1");

const box2 = document.getElementById("box2");

const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = newTask.value.trim();

  if (task !== "") {
    const newTaskItem = document.createElement("div");
    newTaskItem.classList.add("form-check");

    const newTaskCheck = document.createElement("input");
    newTaskCheck.classList.add("form-check-input");
    newTaskCheck.type = "checkbox";
    newTaskCheck.value = "";
    newTaskCheck.style.textDecoration = "line-through";

    const newTaskLabel = document.createElement("label");
    newTaskLabel.classList.add("form-check-label");
    newTaskLabel.htmlFor = newTaskCheck.id;
    newTaskLabel.textContent = task;

    newTaskItem.appendChild(newTaskCheck);
    newTaskItem.appendChild(newTaskLabel);

    taskList.appendChild(newTaskItem);

    newTask.value = "";

    newTaskCheck.addEventListener("change", function () {
      if (this.checked) {
        newTaskLabel.style.textDecoration = "line-through";
      } else {
        newTaskLabel.style.textDecoration = "none";
      }
    });
  }
}
