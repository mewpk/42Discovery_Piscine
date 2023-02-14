const ftList = $("#ft_list");
const newBtn = $("#newBtn");

function addTask() {
  const task = prompt("Enter a new task:");
  if (task !== null && task !== "") {
    const taskDiv = $("<div></div>").html(`<li>${task}</li>`);
    taskDiv.click(removeTask);
    ftList.prepend(taskDiv);
    saveTasks();
  }
}

function removeTask() {
  const taskDiv = $(this);
  const confirmation = confirm("Are you sure you want to remove this task?");
  if (confirmation) {
    taskDiv.remove();
    saveTasks();
  }
}

function saveTasks() {
  const tasks = [];
  ftList.children().each(function() {
    tasks.push($(this).children("li").html());
  });
  document.cookie = "tasks=" + JSON.stringify(tasks);
}

function loadTasks() {
  const tasksStr = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (tasksStr) {
    const tasks = JSON.parse(tasksStr);
    for (let i = tasks.length-1; i >= 0 ; i--) {
      const taskDiv = $("<div></div>").html(`<li>${tasks[i]}</li>`);
      taskDiv.click(removeTask);
      ftList.prepend(taskDiv);
    }
  }
}

newBtn.click(addTask);

loadTasks();
