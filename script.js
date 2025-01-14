document.getElementById("toggleTableBtn").addEventListener("click", function () {
    const rentTable = document.getElementById("rentTable");
    if (rentTable.style.display === "none" || rentTable.style.display === "") {
        rentTable.style.display = "block";
        this.textContent = "Hide Rent Details";
    } else {
        rentTable.style.display = "none";
        this.textContent = "Show Rent Details";
    }
});


