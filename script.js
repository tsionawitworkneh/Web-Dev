const inputBox = document.getElementById("input-box");
const dateBox = document.getElementById("date-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } 
    else {
        let li = document.createElement("li");
        let taskText = inputBox.value;
        let taskDate = dateBox.value;
        if (taskDate) {
            li.innerHTML = `${taskText} <span class='task-date'>(${taskDate})</span>`;
        } else {
            li.innerHTML = taskText;
        }
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign
        li.appendChild(span);
    }
    inputBox.value = "";
    dateBox.value = "";
    saveTasks();

}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();