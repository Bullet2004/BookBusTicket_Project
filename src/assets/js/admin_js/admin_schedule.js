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

const confirmDeleteModal = document.getElementById("deleteModal");
const openDeleteModalBtn = document.querySelectorAll('.fa-solid.fa-trash');
const cancelDeleteBtn = document.getElementById("cancelBtn");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

// Mở modal khi bấm nút "Xóa"
openDeleteModalBtn.forEach((button) => {
  button.addEventListener('click', function(){
    confirmDeleteModal.style.display = "flex";
  })
})

// Đóng modal khi bấm "Hủy"
cancelDeleteBtn.addEventListener("click", () => {
  confirmDeleteModal.style.display = "none";
});

// Xử lý xác nhận xóa
confirmDeleteBtn.addEventListener("click", () => {
    console.log("Đã xóa thành công!");
    confirmDeleteModal.style.display = "none";
});

// Đóng modal khi bấm ngoài vùng modal
window.addEventListener("click", (event) => {
    if (event.target === confirmDeleteModal) {
      confirmDeleteModal.style.display = "none";
    }
});