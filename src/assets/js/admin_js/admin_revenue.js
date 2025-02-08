const yearlyData = {
    "2023": [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
    "2024": [700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]
};

const monthlyData = {
    "0": [100, 200, 300, 400, 500, 600, 700],
    "1": [150, 250, 350, 450, 550, 650, 750],
    "2": [200, 300, 400, 500, 600, 700, 800],
};

const ctxYearly = document.getElementById('yearlyChart').getContext('2d');
let yearlyChart = new Chart(ctxYearly, {
    type: 'bar',
    data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [{
            label: 'Doanh thu (triệu VND)',
            data: yearlyData["2024"],
            backgroundColor: 'rgba(76, 175, 80, 0.5)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function updateYearlyChart() {
    const year = document.getElementById('yearSelect').value;
    yearlyChart.data.datasets[0].data = yearlyData[year];
    yearlyChart.update();
}

const ctxMonthly = document.getElementById('monthlyChart').getContext('2d');
let monthlyChart = new Chart(ctxMonthly, {
    type: 'line',
    data: {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        datasets: [{
            label: 'Doanh thu (triệu VND)',
            data: monthlyData["0"],
            borderColor: '#FF5733',
            backgroundColor: 'rgba(255, 87, 51, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function updateMonthlyChart() {
    const month = document.getElementById('monthSelect').value;
    monthlyChart.data.datasets[0].data = monthlyData[month] || [0, 0, 0, 0, 0, 0, 0];
    monthlyChart.update();
}