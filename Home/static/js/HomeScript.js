// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Navbar: https://codepen.io/themustafaomar/pen/VKbQyZ

'use strict'



function find(el, selector) {
    let finded
    return (finded = el.querySelector(selector)) ? finded : null
}

function siblings(el) {
    const siblings = []
    for (let sibling of el.parentNode.children) {
        if (sibling !== el) {
            siblings.push(sibling)
        }
    }
    return siblings
}

const showAsideBtn = document.querySelector('.show-side-btn')
const sidebar = document.querySelector('.sidebar')
const wrapper = document.querySelector('#wrapper')
try {
    showAsideBtn.addEventListener('click', function () {
        document.querySelector(`#document.querySelector{this.dataset.show}`).classList.toggle('show-sidebar')
        wrapper.classList.toggle('fullwidth')
    })
} catch (error) {

}


if (window.innerWidth < 767) {
    sidebar.classList.add('show-sidebar');
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 767) {
        sidebar.classList.remove('show-sidebar')
    }
})

// dropdown menu in the side nav
var slideNavDropdown = document.querySelector('.sidebar-dropdown');

document.querySelector('.sidebar .categories').addEventListener('click', function (event) {


    const item = event.target.closest('.has-dropdown')

    item.classList.toggle('opened')

    siblings(item).forEach(sibling => {
        sibling.classList.remove('opened')
    })

    if (item.classList.contains('opened')) {
        const toOpen = find(item, '.sidebar-dropdown')

        if (toOpen) {
            toOpen.classList.add('active')
        }

        siblings(item).forEach(sibling => {
            const toClose = find(sibling, '.sidebar-dropdown')

            if (toClose) {
                toClose.classList.remove('active')
            }
        })
    } else {
        find(item, '.sidebar-dropdown').classList.toggle('active')
    }
})

document.querySelector('.sidebar .close-aside').addEventListener('click', function () {
    document.querySelector(`#document.querySelector{this.dataset.close}`).classList.add('show-sidebar')
    wrapper.classList.remove('margin')
})

var lineChartData = {
    // labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [{
        label: "Nhiệt độ",
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [{
                x: 1,
                y: randomScalingFactor(),
            },
            {
                x: 2,
                y: randomScalingFactor(),
            }, {
                x: 3,
                y: randomScalingFactor(),
            }, {
                x: 4,
                y: randomScalingFactor(),
            }, {
                x: 5,
                y: randomScalingFactor(),
            }, {
                x: 6,
                y: randomScalingFactor(),
            }, {
                x: 7,
                y: randomScalingFactor(),
            },
        ],
        yAxisID: "y-axis-1",
    }, {
        label: "Độ ẩm",
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [{
                x: 1,
                y: randomScalingFactor(),
            },
            {
                x: 2,
                y: randomScalingFactor(),
            }, {
                x: 3,
                y: randomScalingFactor(),
            }, {
                x: 4,
                y: randomScalingFactor(),
            }, {
                x: 5,
                y: randomScalingFactor(),
            }, {
                x: 6,
                y: randomScalingFactor(),
            }, {
                x: 7,
                y: randomScalingFactor(),
            },
        ],
        yAxisID: "y-axis-2"
    }]
};

function RenderDataChart(datasetHumid, datasetTemp) {
    console.log(datasetHumid, datasetTemp);
    return

}

window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Biểu đồ nhiệt độ - độ ẩm'
            },
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'top',
                    gridLines: {
                        zeroLineColor: "rgba(0,255,0,1)"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'x axis'
                    }
                }],
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                }, {
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "right",
                    id: "y-axis-2",

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
};

// document.getElementById('randomizeData').addEventListener('click', function () {
//     lineChartData.datasets.forEach(function (dataset) {
//         dataset.data = dataset.data.map(function () {
//             return randomScalingFactor();
//         });
//     });

//     window.myLine.update();
// });

// try {
//     var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
//     var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
//     const labels = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
//     const data = {
//         labels: labels,
//         datasets: [{
//                 label: 'Dataset 1',
//                 data: xValues,
//                 borderColor: '#f37121',
//                 backgroundColor: 'transparent',
//                 yAxisID: 'y',
//             },
//             {
//                 label: 'Dataset 2',
//                 data: yValues,
//                 borderColor: '#f37121',
//                 backgroundColor: 'transparent',
//                 yAxisID: 'y1',
//             }
//         ]
//     };
//     new Chart("chart1", {
//         type: "line",
//         data: {
//             labels: xValues,
//             datasets: [{
//                 fill: false,
//                 lineTension: 0,
//                 backgroundColor: "#7D2B2B",
//                 borderColor: "red",
//                 borderWidth: 2.5,
//                 data: data
//             }]
//         },
//         options: {
//             legend: {
//                 display: false
//             },
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         min: 6,
//                         max: 16
//                     }
//                 }],
//             }
//         }
//     });
// } catch (err) {
//     console.log(err);
// }

// let msg = new SpeechSynthesisUtterance();
// let voices = window.speechSynthesis.getVoices();


// msg.onend = function (e) {
//     console.log('Finished in ' + event.elapsedTime + ' seconds.');
// };

// windows.speechSynthesis.speak(msg);

// function speak() {
//     window.speechSynthesis.cancel();
//     var msg = new SpeechSynthesisUtterance('hello');
//     msg.rate = 0.7; // 0.1 to 10
//     msg.pitch = 2; //0 to 2
//     msg.lang = 'vi-VN';
//     window.speechSynthesis.speak(msg);
//     console.log('test')
// }
// speak();


// // grab the UI elements to work with
// const textEl = document.getElementById('text');
// const speakEl = document.getElementById('speak');

// // click handler
// speakEl.addEventListener('click', speakText);

// function speakText() {
//     // stop any speaking in progress
//     window.speechSynthesis.cancel();

//     // speak text
//     const text = textEl.value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
// }

// document.getElementById("speak").click();