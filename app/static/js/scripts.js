// Open button event listener
document.getElementById("openForm").addEventListener("click", function () {
    console.log("Open button clicked");
    document.getElementById("taskFormPopup").classList.add("show"); // Add 'show' class
});

// Close button event listener
document.querySelector(".close").addEventListener("click", function () {
    console.log("Close button clicked");
    document.getElementById("taskFormPopup").classList.remove("show"); // Remove 'show' class
});

// Handle Form Submission and Add Task to List
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const taskName = document.getElementById("task_name").value;
    const assignedDate = document.getElementById("assigned_date").value;
    const dueDate = document.getElementById("due_date").value;

    // Add task to the list
    addTaskToList(taskName, assignedDate, dueDate);

    // Clear form inputs and close the popup
    document.getElementById("taskForm").reset();
    document.getElementById("taskFormPopup").style.display = "none";
});

// Function to Add Task to the List
function addTaskToList(taskName, assignedDate, dueDate) {
    const taskItems = document.getElementById("taskItems");
    const li = document.createElement("li");

    // Create task content and action buttons
    li.innerHTML = `
        <div class="task-item">
            <div class="task-content">
                <strong>${taskName}</strong> 
                <br>Assigned: ${new Date(assignedDate).toLocaleString()} 
                <br>Due: ${new Date(dueDate).toLocaleString()}
            </div>
            <div class="task-actions">
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        </div>`;

    taskItems.appendChild(li);
}

// Function to Delete Task
function deleteTask(button) {
    const taskItem = button.closest("li");
    taskItem.remove();
}

// Function to Edit Task
function editTask(button) {
    const taskItem = button.closest("li");
    const taskContent = taskItem.querySelector(".task-content");

    // Extract current task details
    const [taskName, assignedText, dueText] = taskContent.innerText.split("\n");
    const assignedDate = new Date(assignedText.replace("Assigned: ", "")).toISOString().slice(0, 16);
    const dueDate = new Date(dueText.replace("Due: ", "")).toISOString().slice(0, 16);

    // Pre-fill the form with existing data
    document.getElementById("task_name").value = taskName;
    document.getElementById("assigned_date").value = assignedDate;
    document.getElementById("due_date").value = dueDate;

    // Show the popup and remove the task from the list (to avoid duplicates on re-add)
    document.getElementById("taskFormPopup").style.display = "flex";
    taskItem.remove();
}
