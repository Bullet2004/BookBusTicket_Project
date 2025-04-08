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

function openEditModal(scheduleData) {
  // Get all form inputs in edit modal
  const editForm = editModalOverlay.querySelector('form');
  
  // Populate form fields with schedule data
  if (scheduleData) {
    const departureInput = editForm.querySelector('#departure');
    const destinationInput = editForm.querySelector('#destination');
    const distanceInput = editForm.querySelector('#distance');
    const timeInput = editForm.querySelector('#time');
    const priceInput = editForm.querySelector('#price');

    // Set values
    departureInput.value = scheduleData.departure;
    destinationInput.value = scheduleData.destination;
    
    // Extract distance number from format "300km - 4 giờ"
    const distanceMatch = scheduleData.distance.match(/(\d+)km/);
    if (distanceMatch) {
      distanceInput.value = distanceMatch[1];
    }
    
    // Extract time from format "300km - 4 giờ"
    const timeMatch = scheduleData.time.match(/(\d+)\s*giờ/);
    if (timeMatch) {
      const hours = timeMatch[1].padStart(2, '0');
      timeInput.value = `${hours}:00`;
    }
    
    // Extract price number from format "500.000đ"
    const priceMatch = scheduleData.price.match(/(\d+(?:\.\d+)?)/);
    if (priceMatch) {
      priceInput.value = priceMatch[1].replace('.', '');
    }
  }
  
  editModalOverlay.classList.add('open');
}

// Hàm đóng modal
function closeModal() {
  modalOverlay.classList.remove('open');
}

function closeEditModal() {
  editModalOverlay.classList.remove('open');
  // Clear form data when closing
  const editForm = editModalOverlay.querySelector('form');
  editForm.reset();
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
  button.addEventListener('click', () => {
    // Get the schedule item container
    const scheduleItem = button.closest('.schedule-item');
    
    // Extract data from the schedule item
    const scheduleData = {
      departure: scheduleItem.querySelector('.schedule-start-postion').textContent,
      destination: scheduleItem.querySelector('.schedule-end-position').textContent,
      distance: scheduleItem.querySelector('.time-price-group').textContent.trim(),
      time: scheduleItem.querySelector('.time-price-group').textContent.trim(),
      price: scheduleItem.querySelector('.price').textContent,
      imageUrl: scheduleItem.querySelector('.schedule-img').src
    };
    
    openEditModal(scheduleData);
  });
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