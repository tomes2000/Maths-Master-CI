// Modal concept taken directly from --> "https://www.youtube.com/watch?v=XH5OW46yO8I"

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open & close modal event listeners s
openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });
  
  closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
  