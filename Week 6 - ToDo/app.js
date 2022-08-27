//for upcoming tasks
const taskHTML1 = "<td onclick='showCellIndex(this)'><i onclick='makeTaskCompleted()' class='complete-icon fa-solid fa-circle-notch'></i><span class='task-text-span'>";
const taskHTML2 = "</span><i onclick='deleteTask(1)' class='trash-icon fa-solid fa-trash-can'></i></td>";

//for completed tasks
const taskHTML3 = "<td onclick='showCellIndex(this)'><i class='complete-icon-div2 greyed fa-solid fa-check'></i><span class='greyed task-text-span'>";
const taskHTML4 = "</span><i onclick='deleteTask(2)' class='trash-icon fa-solid fa-trash-can'></i></td>";

let arrUpco = []; //array of keys - upcoming tasks for localStorage
let arrComp = []; //array of keys - completed tasks for localStorage
let index = 0;

// localStorage.clear();

if (localStorage.getItem("upcoming-tasks") == null) {
    localStorage.setItem("upcoming-tasks", JSON.stringify([]));
}

if (localStorage.getItem("completed-tasks") == null) {
    localStorage.setItem("completed-tasks", JSON.stringify([]));
}

let upcomingArr = JSON.parse(localStorage.getItem("upcoming-tasks"));
let completedArr = JSON.parse(localStorage.getItem("completed-tasks"));

updateUpcomingTasks();
updateCompletedTasks();

function showCellIndex(x) {
    console.log("Cell Index = ", x.cellIndex);
    index = x.cellIndex;
}

function deleteTask(n) {
    if (n === 1) {
        upcomingArr.splice(index, 1);
        localStorage.setItem("upcoming-tasks", JSON.stringify(upcomingArr));
        updateUpcomingTasks();
    }
    else if (n === 2) {
        completedArr.splice(index, 1);
        localStorage.setItem("completed-tasks", JSON.stringify(completedArr));
        updateCompletedTasks();
    }
}

function makeTaskCompleted() {
    completedArr.push(upcomingArr[index]);
    console.log(completedArr);
    upcomingArr.splice(index, 1);
    localStorage.setItem("upcoming-tasks", JSON.stringify(upcomingArr));
    localStorage.setItem("completed-tasks", JSON.stringify(completedArr));
    updateUpcomingTasks();
    updateCompletedTasks()
}

function saveTask() {
    let inputTaskText = $(".entered-list").val();
    $(".entered-list").val("");
    console.log(inputTaskText);
    $("#upcoming-tasks").append(taskHTML1 + inputTaskText + taskHTML2);
    upcomingArr.push(inputTaskText);
    localStorage.setItem("upcoming-tasks", JSON.stringify(upcomingArr));
}

function updateUpcomingTasks() { 
    $("#upcoming-tasks").empty();
    for (let i = 0; i < upcomingArr.length; i++) { 
        $("#upcoming-tasks").append(taskHTML1 + upcomingArr[i] + taskHTML2);
    }
}

function updateCompletedTasks() { 
    $("#completed-tasks").empty();
    for (let i = 0; i < completedArr.length; i++) { 
        $("#completed-tasks").append(taskHTML3 + completedArr[i] + taskHTML4);
    }
}