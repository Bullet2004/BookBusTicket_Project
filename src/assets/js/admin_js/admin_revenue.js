const yearlyData = {
    "2023": [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
    "2024": [700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]
};

const monthlyData = {
    "0": [100, 200, 300, 400, 500, 600, 700],
    "1": [150, 250, 350, 450, 550, 650, 750],
    "2": [200, 300, 400, 500, 600, 700, 800],
};

const yearlyComparisonData = {
    "2020": [400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950],
    "2021": [450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
    "2022": [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050],
    "2023": [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
    "2024": [700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]
};

Chart.defaults.font.family = "'Poppins', sans-serif";
Chart.defaults.color = '#64748b';
Chart.defaults.borderColor = '#e2e8f0';

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#1e293b',
            bodyColor: '#64748b',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 12,
            boxPadding: 6,
            usePointStyle: true,
            callbacks: {
                label: function(context) {
                    return `Doanh thu: ${context.raw.toLocaleString()} triệu VND`;
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: '#e2e8f0',
                drawBorder: false
            },
            ticks: {
                callback: function(value) {
                    return value.toLocaleString() + ' triệu';
                }
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

const ctxYearly = document.getElementById('yearlyChart').getContext('2d');
let yearlyChart = new Chart(ctxYearly, {
    type: 'bar',
    data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [{
            label: 'Doanh thu',
            data: yearlyData["2024"],
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderColor: '#2563eb',
            borderWidth: 2,
            borderRadius: 4,
            hoverBackgroundColor: 'rgba(37, 99, 235, 0.2)'
        }]
    },
    options: {
        ...chartOptions,
        plugins: {
            ...chartOptions.plugins,
            title: {
                display: true,
                text: 'Doanh thu theo tháng (triệu VND)',
                padding: {
                    bottom: 20
                }
            }
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
            label: 'Doanh thu',
            data: monthlyData["0"],
            borderColor: '#059669',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#059669',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        ...chartOptions,
        plugins: {
            ...chartOptions.plugins,
            title: {
                display: true,
                text: 'Doanh thu theo tuần (triệu VND)',
                padding: {
                    bottom: 20
                }
            }
        }
    }
});

function updateMonthlyChart() {
    const month = document.getElementById('monthSelect').value;
    monthlyChart.data.datasets[0].data = monthlyData[month] || [0, 0, 0, 0, 0, 0, 0];
    monthlyChart.update();
}

const ctxYearlyComparison = document.getElementById('yearlyComparisonChart').getContext('2d');
let yearlyComparisonChart = new Chart(ctxYearlyComparison, {
    type: 'line',
    data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [
            {
                label: '2023',
                data: yearlyComparisonData["2023"],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            },
            {
                label: '2024',
                data: yearlyComparisonData["2024"],
                borderColor: '#059669',
                backgroundColor: 'rgba(5, 150, 105, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }
        ]
    },
    options: {
        ...chartOptions,
        plugins: {
            ...chartOptions.plugins,
            title: {
                display: true,
                text: 'So sánh doanh thu theo năm (triệu VND)',
                padding: {
                    bottom: 20
                }
            }
        }
    }
});

function updateYearlyComparisonChart() {
    const yearRange = parseInt(document.getElementById('yearRangeSelect').value);
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: yearRange}, (_, i) => currentYear - i).reverse();
    
    const datasets = years.map((year, index) => {
        const colors = [
            { border: '#2563eb', background: 'rgba(37, 99, 235, 0.1)' },
            { border: '#059669', background: 'rgba(5, 150, 105, 0.1)' },
            { border: '#d97706', background: 'rgba(217, 119, 6, 0.1)' },
            { border: '#dc2626', background: 'rgba(220, 38, 38, 0.1)' },
            { border: '#7c3aed', background: 'rgba(124, 58, 237, 0.1)' }
        ];
        
        return {
            label: year.toString(),
            data: yearlyComparisonData[year.toString()] || Array(12).fill(0),
            borderColor: colors[index].border,
            backgroundColor: colors[index].background,
            borderWidth: 2,
            tension: 0.4,
            fill: true
        };
    });

    yearlyComparisonChart.data.datasets = datasets;
    yearlyComparisonChart.update();
}

updateYearlyComparisonChart();