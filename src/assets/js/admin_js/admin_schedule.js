const modalOverlay = document.querySelector('.addScheduleModal');
const editModalOverlay = document.querySelector('.editScheduleModal');
const openEditModalButtons = document.querySelectorAll('.fa-solid.fa-pen');
const cancelAddButton = document.querySelector('.addScheduleModal .cancel');
const cancelEditButton = document.querySelector('.editScheduleModal .cancel');
const openModalButton = document.querySelector('.add-btn');

function openModal() {
  modalOverlay.classList.add('open');
}

function openEditModal(scheduleData) {
  const editForm = editModalOverlay.querySelector('form');
  
  if (scheduleData) {
    const departureInput = editForm.querySelector('#departure');
    const destinationInput = editForm.querySelector('#destination');
    const distanceInput = editForm.querySelector('#distance');
    const timeInput = editForm.querySelector('#time');
    const priceInput = editForm.querySelector('#price');

    departureInput.value = scheduleData.departure;
    destinationInput.value = scheduleData.destination;
    
    const distanceMatch = scheduleData.distance.match(/(\d+)km/);
    if (distanceMatch) {
      distanceInput.value = distanceMatch[1];
    }
    
    const timeMatch = scheduleData.time.match(/(\d+)\s*giờ/);
    if (timeMatch) {
      const hours = timeMatch[1].padStart(2, '0');
      timeInput.value = `${hours}:00`;
    }
    
    const priceMatch = scheduleData.price.match(/(\d+(?:\.\d+)?)/);
    if (priceMatch) {
      priceInput.value = priceMatch[1].replace('.', '');
    }
  }
  
  editModalOverlay.classList.add('open');
}

function closeModal() {
  modalOverlay.classList.remove('open');
}

function closeEditModal() {
  editModalOverlay.classList.remove('open');
  const editForm = editModalOverlay.querySelector('form');
  editForm.reset();
}

openModalButton.addEventListener('click', openModal);
cancelAddButton.addEventListener('click', closeModal);
cancelEditButton.addEventListener('click', closeEditModal);

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

openEditModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const scheduleItem = button.closest('.schedule-item');
    
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

openDeleteModalBtn.forEach((button) => {
  button.addEventListener('click', function(){
    confirmDeleteModal.style.display = "flex";
  })
})

cancelDeleteBtn.addEventListener("click", () => {
  confirmDeleteModal.style.display = "none";
});

confirmDeleteBtn.addEventListener("click", () => {
    console.log("Đã xóa thành công!");
    confirmDeleteModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === confirmDeleteModal) {
      confirmDeleteModal.style.display = "none";
    }
});