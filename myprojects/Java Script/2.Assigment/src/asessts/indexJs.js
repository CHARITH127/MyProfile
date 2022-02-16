var colors = ['red', 'rgba(219, 55, 55, 0.68)', 'rgba(222, 98, 98, 0.68)', 'white'];
let count = 0;
let revIndex = 0;
let timeId;

$("#start").click(function () {
    clearInterval(timeId);
    timeId = setInterval(changeColor, 200);
});

$("#stop").click(function () {
    clearInterval(timeId);
});

function changeColor() {
    if (count == 16) {
        count = 0;
        revIndex=0;
    }
    $("#first").css('background-color', colors[count]);
    $("#second").css('background-color', colors[count - 1]);
    $("#third").css('background-color', colors[count - 2]);
    $("#fourth").css('background-color', colors[count - 3]);

    if (count >= 8) {
        $("#first").css('background-color', colors[revIndex - 3]);
        $("#second").css('background-color', colors[revIndex - 2]);
        $("#third").css('background-color', colors[revIndex - 1]);
        $("#fourth").css('background-color', colors[revIndex]);
        revIndex++;
    }
    count++;
}