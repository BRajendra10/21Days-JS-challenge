const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const myTarget = e.currentTarget.classList;
        
        if(myTarget.contains("nav-btn")) {
            modal.classList.add("show-modal");
        } else if(myTarget.contains("btn-close")){
            modal.classList.remove("show-modal");
        }
    });
});

const navDropdown = document.querySelector(".nav-dropdown");
const modalDropdown = document.querySelector(".modal-dropdown");
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains("modal-list")) {
            modalDropdown.classList.toggle("show-dropdown");
        } else if(styles.contains("nav-list")) {
            navDropdown.classList.toggle("show-dropdown");
        }
    });
});

