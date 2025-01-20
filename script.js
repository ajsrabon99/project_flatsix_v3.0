const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = mobileMenu.querySelectorAll(".nav-link"); 
// Open the mobile menu
openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// Close the mobile menu
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});




// Attach click event to payment options
document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', (event) => {
        const selectedMethod = event.target.textContent.trim();
        alert(`You selected: ${selectedMethod}`);
        // Modal will automatically close due to data-bs-dismiss="modal"
    });
});



//advance

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const tableRows = document.querySelectorAll("#advance-list-section table tbody tr");
    

    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        tableRows.forEach(row => {
            const nameCell = row.cells[0].textContent.toLowerCase();
            row.style.display = nameCell.includes(filter) ? "" : "none";
        });
    });
});
