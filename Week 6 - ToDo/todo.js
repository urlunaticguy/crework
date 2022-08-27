const chevronUpTasks = $("#upcoming-tasks-chevron");
const upcomingTaskList = $("#upcoming-tasks-list");
const addTaskBtn = $("#add-task-btn");
const taskDetails = $("#add-task-details");
const mainSpan = $("#main-span");
const plusSvg = $("#plus-svg");
const taskText = $("#task-text");

const upcomingChevrons = [$("#upcoming-chevron-right"), $("#upcoming-chevron-down")];

let state = "idle";
let deletionState = "off";
let taskCounter = 0;
let c1 = 0;
let ggg = [];
let idForSvgs = 0;

// localStorage.clear();
if (localStorage.getItem("upcomingTaskVariable") === null) {
    localStorage.setItem("upcomingTaskVariable", 0);
}

chevronUpTasks.on("click", function() {
    upcomingTaskList.slideToggle();
    upcomingChevrons[0].slideToggle();
    upcomingChevrons[1].slideToggle();
})

const task = {
    "header":"<div class='flex items-center pb-[0.5rem]'><svg id='",
    "header1":"' xmlns='http://www.w3.org/2000/svg' class='border-[0.15rem] border-[#b3b3b3] rounded-full w-[0.9rem] h-[0.9rem]' viewBox='0 0 512 512'><path d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z'/></svg><h2 class='text-[1.2rem] px-[0.5rem] font-light'>",
    "footer":"</h2></div>",
};

addTaskBtn.on("click", function() {
    if (state == "idle") {
        toggleHiding([taskDetails, plusSvg]);
        mainSpan.text("Add.");
        state = "task-in-process";
    } else if ((state == "task-in-process") && (taskText.val() != "")) {
        console.log("New Task Created = ", taskText.val());
        let idNo = localStorage.getItem("upcomingTaskVariable");
        localStorage.setItem("upcomingTask " + idNo, taskText.val());
        idNo++;
        localStorage.setItem("upcomingTaskVariable", idNo);
        upcomingTaskList.empty();
        while (localStorage.getItem("upcomingTask " + c1) != null) {
            let taskk = localStorage.getItem("upcomingTask " + c1);
            upcomingTaskList.append(task.header + idForSvgs + task.header1 + taskk + task.footer);
            idForSvgs++;
            c1++;
        }
        c1 = 0;
        taskText.val(""); //text-area reset after every submit
        state = "idle";
        toggleHiding([taskDetails, plusSvg]);
        mainSpan.text("Add a Task");
        taskCounter++;
        console.log("Upcoming Tasks = ", taskCounter);
    } else if (((state == "task-in-process") && (taskText.val() === ""))) {
        state = "idle";
        toggleHiding([taskDetails, plusSvg]);
        mainSpan.text("Add a Task");
        console.log("Empty task entered.");
    }
})

$(document).on("click", "#upcoming-tasks-list div:last-child", function() {
    var id = $(this).attr('id');
    console.log(id);
    var childs = $(this).children.length;
    console.log(childs);
    // console.log(JSON.stringify(event));
    // let svgTarget = ((event.target.toString().slice(8,11)) === "SVG");

    // if (svgTarget) {
    //     // console.log(upcomingTaskList.children.length);
    // }

    // console.log(svgTarget);
})

function addNewTask() {

}

//toggling hidden class
function toggleHiding(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].toggleClass("hidden");
    }
} 

// upcomingTaskList.load(location.href+" #upcoming-tasks-list>*","");