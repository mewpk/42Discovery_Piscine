const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

function addTask() {
  const task = prompt("Enter a new task:");
  if (task !== null && task !== "") {
    const taskDiv = document.createElement("div");
    taskDiv.innerHTML = `<li>${task}</li>`;
    taskDiv.addEventListener("click", removeTask);
    ftList.insertBefore(taskDiv, ftList.firstChild);
    saveTasks();
  }
}

function removeTask() {
  const taskDiv = this;
  const confirmation = confirm("Are you sure you want to remove this task?");
  if (confirmation) {
    ftList.removeChild(taskDiv);
    saveTasks();
  }
}

function saveTasks() {
  const tasks = [];
  const taskDivs = ftList.children;
  for (let i = 0; i < taskDivs.length; i++) {
    tasks.push(taskDivs[i].children[0].innerHTML);
  }
  document.cookie = "tasks=" + JSON.stringify(tasks);
}

function loadTasks() {
  const cookie = document.cookie
  console.log(cookie)
  const tasksStr = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (tasksStr) {
    const tasks = JSON.parse(tasksStr);
    for (let i = tasks.length-1; i >= 0 ; i--) {
      const taskDiv = document.createElement("div");
      taskDiv.innerHTML = `<li>${tasks[i]}</li>`;
      taskDiv.addEventListener("click", removeTask);
      ftList.insertBefore(taskDiv, ftList.firstChild);
    }
  }
}

newBtn.addEventListener("click", addTask);

loadTasks();