try {
    // Global defaults
    Chart.defaults.global.animation.duration = 2000; // Animation duration
    Chart.defaults.global.title.display = false; // Remove title
    Chart.defaults.global.defaultFontColor = '#71748c'; // Font color
    Chart.defaults.global.defaultFontSize = 13; // Font size for every label

    // Tooltip global resets
    Chart.defaults.global.tooltips.backgroundColor = '#111827'
    Chart.defaults.global.tooltips.borderColor = 'blue'

    // Gridlines global resets
    Chart.defaults.scale.gridLines.zeroLineColor = '#3b3d56'
    Chart.defaults.scale.gridLines.color = '#3b3d56'
    Chart.defaults.scale.gridLines.drawBorder = false

    // Legend global resets
    Chart.defaults.global.legend.labels.padding = 0;
    Chart.defaults.global.legend.display = false;

    // Ticks global resets
    Chart.defaults.scale.ticks.fontSize = 12
    Chart.defaults.scale.ticks.fontColor = '#71748c'
    Chart.defaults.scale.ticks.beginAtZero = false
    Chart.defaults.scale.ticks.padding = 10

    // Elements globals
    Chart.defaults.global.elements.point.radius = 0

    // Responsivess
    Chart.defaults.global.responsive = true
    Chart.defaults.global.maintainAspectRatio = false
    const listMonth = ['Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
    ]
    // The bar chart
    var chart1 = new Chart(document.getElementById('chart1'), {
        type: 'bar',
        data: {
            labels: listMonth,
            datasets: [{
                label: "Sản lượng điện",
                data: [45, 25, 40, 20, 60, 20, 35, 25, 30, 60, 80, 40],
                backgroundColor: "#0d6efd",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.4,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    gridLines: {},
                    ticks: {
                        stepSize: 15,
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }
    })

    // The line chart
    var chart2 = new Chart(document.getElementById('chart2'), {
        type: 'bar',
        data: {
            labels: listMonth,
            datasets: [{
                label: "Công suất",
                data: [45, 25, 40, 20, 60, 20, 35, 25, 30, 60, 80, 40],
                backgroundColor: "#7D2B2B",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.4,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    gridLines: {},
                    ticks: {
                        stepSize: 15,
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }
    });

    var chart3 = new Chart(document.getElementById('chart3'), {
        type: 'bar',
        data: {
            labels: listMonth,
            datasets: [{
                label: "Điện năng tiêu thụ",
                data: [45, 25, 40, 20, 60, 20, 35, 25, 30, 60, 80, 40],
                backgroundColor: "#ffc107",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.4,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    gridLines: {},
                    ticks: {
                        stepSize: 15,
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }
    })

    var chart4 = new Chart(document.getElementById('chart4'), {
        type: 'bar',
        data: {
            labels: listMonth,
            datasets: [{
                label: "Sản lượng hòa lưới",
                data: [45, 25, 40, 20, 60, 20, 35, 25, 30, 60, 80, 40],
                backgroundColor: "#198754",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.4,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    gridLines: {},
                    ticks: {
                        stepSize: 15,
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }
    })

} catch (err) {
    console.log(err);
}