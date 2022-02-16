
var colors = ['red','deeppink','#e3b499','yellow','blue','green'];
let count = 0;
let timeId;

$("#start").click(function () {
    clearInterval(timeId);
    timeId = setInterval(changeColor, 1000);
});

$("#stop").click(function () {
    clearInterval(timeId);
});

function changeColor(){
    if (count == 6) {
        count=0;
    }

    if(count==5){
        $('.first').css('background-color', colors[0]);
    }else {
        $('.first').css('background-color', colors[count+1]);
    }
    $('.second').css('background-color', colors[count]);

    if (count+5>=6){
        $('.third').css('background-color', colors[count-1]);
    }else {
        $('.third').css('background-color', colors[count+5]);
    }

    if (count+4>=6){
        $('.fourth').css('background-color', colors[count-2]);
    }else {
        $('.fourth').css('background-color', colors[count+4]);
    }

    if (count+3>=6){
        $('.fifth').css('background-color', colors[count-3]);
    }else {
        $('.fifth').css('background-color', colors[count+3]);
    }

    if (count+2>=6){
        $('.sixth').css('background-color', colors[count-4]);
    }else {
        $('.sixth').css('background-color', colors[count+2]);
    }


    count++;
}

