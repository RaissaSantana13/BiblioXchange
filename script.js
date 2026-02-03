const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

if (profileIcon && dropdownMenu) {
    profileIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        
        const isVisible = dropdownMenu.style.display === "flex";
        dropdownMenu.style.display = isVisible ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
        if (!profileIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
}