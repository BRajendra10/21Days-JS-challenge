const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

// modal will open when clicked once
openBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

// modal will close when duble clicked
openBtn.addEventListener("dblclick", () => {
  modal.classList.remove("open-modal");
});

// modal will close when close button clicked once
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

