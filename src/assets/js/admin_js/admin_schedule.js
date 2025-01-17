// Lấy các phần tử
const modalOverlay = document.querySelector('.addScheduleModal');
const editModalOverlay = document.querySelector('.editScheduleModal');
const openEditModalButtons = document.querySelectorAll('.fa-solid.fa-pen');
const cancelAddButton = document.querySelector('.addScheduleModal .cancel');
const cancelEditButton = document.querySelector('.editScheduleModal .cancel');
const openModalButton = document.querySelector('.add-btn');

// Hàm mở modal
function openModal() {
  modalOverlay.classList.add('open');
}

function openEditModal() {
  editModalOverlay.classList.add('open');
}

// Hàm đóng modal
function closeModal() {
  modalOverlay.classList.remove('open');
}

function closeEditModal() {
  editModalOverlay.classList.remove('open');
}

// Gắn sự kiện cho nút mở và đóng modal
openModalButton.addEventListener('click', openModal);
cancelAddButton.addEventListener('click', closeModal);
cancelEditButton.addEventListener('click', closeEditModal);

// Đóng modal khi click vào overlay
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

editModalOverlay.addEventListener('click', (event) => {
  if (event.target === editModalOverlay) {
    closeEditModal();
  }
});

// Gắn sự kiện cho các nút mở modal chỉnh sửa
openEditModalButtons.forEach((button) => {
  button.addEventListener('click', openEditModal);
});
