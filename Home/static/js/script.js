function SendData() {
    let config = $('#config').val();
    let use_conf = $('#use_conf').val();
    let name = $('#name').val();
    let phase = $('#phase').val();
    let temp_min = $('#min_temp').val();
    let temp_max = $('#max_temp').val();
    let speed = $('#speed').val();
    let start = $('#start').val();
    console.log(config, use_conf, name, phase, temp_min, temp_max, speed, start);
    let url = window.location.href;
    $.ajax({
        type: "POST",
        url: "http://" + window.location.host + "/add-config",
        data: {
            'config_name': config,
            'use_conf': use_conf,
            'tea_name': name,
            'phase': phase,
            'temp_min': temp_min,
            'temp_max': temp_max,
            'speed': speed,
            'start': start,
            'length': length,
        },
        success: function (response) {
            console.log(response);
        }
    })
}
$("#confirm").on('click', function () {
    SendData();
});

function SetData() {
    let url = "http://" + window.location.host + "/get_data";
    $.ajax({
        type: "GET",
        url: url,
        // context: document.body,
        contentType: 'application/json',
        success: function (response) {
            $("#length").text(response.length + "°C");
            $("#light_data").text(response.light + " LUX");
            $("#tank_data").text(response.tank + "%");
            if (response.pump1_status == 0) {
                $("#pump1_status").text("OFF");
            }
            if (response[response.length - 1].pump1_status == 1) {
                $("#pump1_status").text("ON");
            }
            if (response[response.length - 1].pump2_status == 0) {
                $("#pump2_status").text("OFF");
            }
            if (response[response.length - 1].pump2_status == 1) {
                $("#pump2_status").text("ON");
            }

        }
    });
}

$('#submit_conf').on('click', function () {
    let tempMin = $('#min-conf').val();
    let tempMax = $('#max-conf').val();
    let length = $('#time-conf').val();
    let speed = $('#speed-conf').val();
    let configName = $('#config_name').text().slice(8);
    let url = "http://" + window.location.host + "/set-config";
    $.ajax({
        type: "POST",
        url: url,
        data: {
            'tempMin': tempMin,
            'tempMax': tempMax,
            'length': length,
            'speed': speed,
            'configName': configName
        },
        success: function (response) {
            console.log(response);
        }
    })
})
$(document).ready(function () {
    let url = "http://" + window.location.host + "/get-data";
    $.ajax({
        type: "GET",
        url: url,
        // context: document.body,
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            $('#tea_name').text("LOẠI CHÈ: " +
                response[2].tea_name);

            $('#config_name').text("CHẾ ĐỘ: " +
                response[2].config_name);
                console.log(response[1].temp_min);
            $('#length').text(response[1].length + " phút");
            $('#temp').text(response[0].temp + "°C");
            $('#humid').text(response[0].humid + "%");
            $('#speed_display').text(String(response[1].speed) + " RPM");
            $('#power').text(response[0].capacity + "W");
            $('#temp-min').text(String(response[1].temp_min) + "°C");
            $('#max-temp').text(String(response[1].temp_max) + "°C");
             response[0].status == 0 ? document.getElementById("runningstate").style.display = "none" : $("#runningstate").style.display = "block";
        }
    });



})