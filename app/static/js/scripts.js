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
