let inputBox = document.querySelector("#input-text");
let taskList = document.querySelector(".task-list");
let addBtn = document.querySelector(".btn");

addBtn.addEventListener("click", () => inputBox.value.trim() && addTask());
inputBox.addEventListener("keypress", (e) => e.key === "Enter" && inputBox.value.trim() && addTask());

function addTask() {
    let li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `${inputBox.value.trim()} <span>&times;</span>`;
    taskList.appendChild(li);
    inputBox.value = '';
}

taskList.addEventListener("click", (e) => 
    e.target.tagName === "LI" ? e.target.classList.toggle("checked") : 
    e.target.tagName === "SPAN" && e.target.parentElement.remove()
);
