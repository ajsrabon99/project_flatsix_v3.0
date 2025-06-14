const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = mobileMenu.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

//hero
document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".fade-in");
    const heroText2 = document.querySelector(".fade-in.delay");

    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText2.style.opacity = "1";
    }, 500);
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
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function () {
    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#advance-list-section tbody tr');

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(filter) ? '' : 'none';
    });
});



const datesContainer = document.getElementById("dates");
const firstDay = new Date(2025, 5, 1).getDay(); // June = 5
const totalDays = 30;

const today = new Date();
const isJune2025 = today.getFullYear() === 2025 && today.getMonth() === 5;
const todayDate = isJune2025 ? today.getDate() : null;

let html = '';
for (let i = 0; i < firstDay; i++) {
    html += `<div class="col"></div>`;
}
for (let day = 1; day <= totalDays; day++) {
    const isToday = day === todayDate;
    html += `
    <div class="col">
      <div style="
        background: linear-gradient(to top left, #3f3f46, #222);
        border-radius: 0.75rem;
        padding: 1rem;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.6),
                    -3px -3px 10px rgba(255,255,255,0.05);
        color: #fff;
        transition: all 0.3s ease-in-out;
        ${isToday ? 'border: 2px solid #ffcc00; background-color: #2b2b2b; box-shadow: 0 0 15px #ffcc00aa;' : ''}
      " onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
        ${day}
      </div>
    </div>`;
}
datesContainer.innerHTML = html;


seeMoreBtn.addEventListener('click', () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = additionalMembers.trim();
    const newCards = tempDiv.children;

    for (let card of newCards) {
        card.classList.add('member-card-animated');
        membersContainer.appendChild(card);
    }

    seeMoreBtn.style.display = 'none'; // Hide button after loading more
});
