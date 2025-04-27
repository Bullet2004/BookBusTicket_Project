const bookings = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    phone: "0123456789",
    route: "Tuyến 01: Hà Nội - Hải Phòng",
    price: "100,000 VND",
    time: "2025-01-17 08:00:00",
    status: "pending",
  },
  {
    id: 2,
    name: "Trần Thị B",
    phone: "0987654321",
    route: "Tuyến 02: Hà Nội - Nam Định",
    price: "80,000 VND",
    time: "2025-01-18 09:30:00",
    status: "accepted",
  },
  {
    id: 3,
    name: "Phạm Văn C",
    phone: "0912345678",
    route: "Tuyến 03: Hà Nội - Ninh Bình",
    price: "120,000 VND",
    time: "2025-01-19 10:15:00",
    status: "pending",
  },
  {
      id: 4,
      name: "Nguyễn Văn A",
      phone: "0123456789",
      route: "Tuyến 01: Hà Nội - Hải Phòng",
      price: "100,000 VND",
      time: "2025-01-20 08:00:00",
      status: "pending",
    },
    {
      id: 5,
      name: "Trần Thị B",
      phone: "0987654321",
      route: "Tuyến 02: Hà Nội - Nam Định",
      price: "80,000 VND",
      time: "2025-02-17 09:30:00",
      status: "accepted",
    },
    {
      id: 6,
      name: "Phạm Văn C",
      phone: "0912345678",
      route: "Tuyến 03: Hà Nội - Ninh Bình",
      price: "120,000 VND",
      time: "2025-03-17 10:15:00",
      status: "pending",
    },
    {
      id: 7,
      name: "Nguyễn Văn A",
      phone: "0123456789",
      route: "Tuyến 01: Hà Nội - Hải Phòng",
      price: "100,000 VND",
      time: "2025-03-18 08:00:00",
      status: "pending",
    },
    {
      id: 8,
      name: "Trần Thị B",
      phone: "0987654321",
      route: "Tuyến 02: Hà Nội - Nam Định",
      price: "80,000 VND",
      time: "2025-02-19 09:30:00",
      status: "accepted",
    },
    {
      id: 9,
      name: "Phạm Văn C",
      phone: "0912345678",
      route: "Tuyến 03: Hà Nội - Ninh Bình",
      price: "120,000 VND",
      time: "2025-02-19 10:15:00",
      status: "pending",
    },
    {
      id: 10,
      name: "Nguyễn Văn A",
      phone: "0123456789",
      route: "Tuyến 01: Hà Nội - Hải Phòng",
      price: "100,000 VND",
      time: "2025-02-20 08:00:00",
      status: "pending",
    },
    {
      id: 11,
      name: "Trần Thị B",
      phone: "0987654321",
      route: "Tuyến 02: Hà Nội - Nam Định",
      price: "80,000 VND",
      time: "2025-01-20 09:30:00",
      status: "accepted",
    },
    {
      id: 12,
      name: "Phạm Văn C",
      phone: "0912345678",
      route: "Tuyến 03: Hà Nội - Ninh Bình",
      price: "120,000 VND",
      time: "2025-02-20 10:15:00",
      status: "pending",
    },    
];

function getUniqueRoutes() {
  const routes = bookings.map((booking) => booking.route);
  return ["Tất cả", ...new Set(routes)];
}

function renderTable(filteredBookings) {
  const tableBody = document.getElementById("booking-table-body");
  tableBody.innerHTML = ""; 

  filteredBookings.forEach((booking, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${booking.name}</td>
      <td>${booking.phone}</td>
      <td>${booking.route}</td>
      <td>${booking.price}</td>
      <td>${booking.time}</td>
      <td class="status ${booking.status}">
        ${booking.status === "pending" ? "Đang chờ" : booking.status === "accepted" ? "Đã chấp nhận" : "Đã từ chối"}
      </td>
      <td>
        <button class="accept-btn" ${booking.status !== "pending" ? "disabled" : ""}>Chấp nhận</button>
        <button class="reject-btn" ${booking.status !== "pending" ? "disabled" : ""}>Từ chối</button>
      </td>
    `;

    const acceptBtn = row.querySelector(".accept-btn");
    const rejectBtn = row.querySelector(".reject-btn");

    acceptBtn?.addEventListener("click", () => updateStatus(index, "accepted"));
    rejectBtn?.addEventListener("click", () => updateStatus(index, "rejected"));

    tableBody.appendChild(row);
  });
}

function updateStatus(index, newStatus) {
  bookings[index].status = newStatus;
  applyFilters();
}

function applyFilters() {
  const routeFilter = document.getElementById("route-filter").value;
  const dateFilter = document.getElementById("date-filter").value;

  let filteredBookings = bookings;

  if (routeFilter !== "all") {
    filteredBookings = filteredBookings.filter((booking) => booking.route === routeFilter);
  }

  if (dateFilter) {
    filteredBookings = filteredBookings.filter((booking) => booking.time.startsWith(dateFilter));
  }

  renderTable(filteredBookings);
}

function populateRouteFilter() {
  const routeFilter = document.getElementById("route-filter");
  const routes = getUniqueRoutes();

  routes.forEach((route) => {
    const option = document.createElement("option");
    option.value = route === "Tất cả" ? "all" : route;
    option.textContent = route;
    routeFilter.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateRouteFilter();
  renderTable(bookings);

  document.getElementById("route-filter").addEventListener("change", applyFilters);
  document.getElementById("date-filter").addEventListener("input", applyFilters);
});