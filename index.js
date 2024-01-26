let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function AddNow() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("li");
        newEle.className = "task-item";
        newEle.innerHTML = `
            <span>${inputs.value}</span>
            <i class="fa-solid fa-pen-to-square edit-icon"></i>
            <i class="fas fa-trash-can delete-icon"></i> `;
        text.appendChild(newEle);
        inputs.value = ""; 

        newEle.querySelector(".edit-icon").addEventListener("click", editTask);
        newEle.querySelector(".delete-icon").addEventListener("click", deleteTask);

        function editTask() {
            let taskSpan = newEle.querySelector("span");
            let newValue = prompt("Enter the new task:", taskSpan.textContent);
            if (newValue !== null && newValue !== "") {
                taskSpan.textContent = newValue;
            }
        }

        function deleteTask() {
            newEle.remove();
        }
    }
}
