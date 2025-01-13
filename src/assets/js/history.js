const ticketData = [
    {
      stt: 1,
      type: "Hà Nội - Đà Nẵng",
      price: "500,000 VND",
      time: "2025-01-13 08:30",
      status: "Đã hoàn tất",
    },
    {
      stt: 2,
      type: "Hồ Chí Minh - Cần Thơ",
      price: "200,000 VND",
      time: "2025-01-12 15:00",
      status: "Chờ duyệt",
    },
    {
      stt: 3,
      type: "Đà Nẵng - Huế",
      price: "150,000 VND",
      time: "2025-01-11 10:00",
      status: "Đã hủy",
    },
    {
      stt: 4,
      type: "Hà Nội - Hải Phòng",
      price: "120,000 VND",
      time: "2025-01-10 12:00",
      status: "Chờ duyệt",
    },
    {
        stt: 5,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },
      {
        stt: 6,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },
      {
        stt: 7,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },
      {
        stt: 8,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã huỷ",
      },
      {
        stt: 9,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Chờ duyệt",
      },
      {
        stt: 10,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },
      {
        stt: 11,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },
      {
        stt: 12,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },
      {
        stt: 13,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã hoàn tất",
      },{
        stt: 14,
        type: "Hà Nội - Hải Phòng",
        price: "120,000 VND",
        time: "2025-01-10 12:00",
        status: "Đã huỷ",
      },

  ];
  
  function loadTicketHistory(data) {
    const tableBody = document.querySelector("#ticket-history tbody");
    tableBody.innerHTML = ""; // Clear the table
  
    data.forEach((ticket) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${ticket.stt}</td>
        <td>${ticket.type}</td>
        <td>${ticket.price}</td>
        <td>${ticket.time}</td>
        <td class="${
          ticket.status === "Đã hoàn tất"
            ? "status-completed"
            : ticket.status === "Đã hủy"
            ? "status-cancelled"
            : "status-pending"
        }">${ticket.status}</td>
        <td>
          ${
            ticket.status === "Chờ duyệt"
              ? `<button class="cancel-button" data-index="${ticket.stt - 1}" onclick="cancelTicket(this)">Hủy</button>`
              : `<span class="no-action">Không khả dụng</span>`
          }
        </td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  
  function cancelTicket(button) {
    const index = button.getAttribute("data-index"); // Lấy chỉ số thực từ data-index
    ticketData[index].status = "Đã hủy";
    sortTickets(); // Refresh table with sorted data
  }
  
  
  function sortTickets() {
    const sortValue = document.getElementById("sort-select").value;
  
    const sortedData = [...ticketData].sort((a, b) => {
      const dateA = new Date(a.time);
      const dateB = new Date(b.time);
  
      if (sortValue === "newest") {
        return dateB - dateA; // Sort from newest to oldest
      } else if (sortValue === "oldest") {
        return dateA - dateB; // Sort from oldest to newest
      }
    });
  
    loadTicketHistory(sortedData);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    sortTickets(); // Default sort by newest
  });
  