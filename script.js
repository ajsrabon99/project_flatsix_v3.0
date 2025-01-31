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


document.addEventListener('DOMContentLoaded', function () {
    const datesContainer = document.getElementById('dates');
    const year = 2025;
    const month = 1; // February (0-based index)

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();

    let datesHTML = '';

    // Fill in the blanks for the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        datesHTML += `<div class="col"></div>`;
    }

    // Fill in the dates
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const isToday = date.toDateString() === today.toDateString();
        datesHTML += `
            <div class="col p-2 ${isToday ? 'bg-primary text-white rounded' : ''}">
                ${day}
            </div>
        `;
    }

    datesContainer.innerHTML = datesHTML;
});