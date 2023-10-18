var hourss = document.getElementById("hours1");
var minitue = document.getElementById("min2");
var seconds = document.getElementById("sec3");
var milisecond = document.getElementById("msec4");
var hours1 ="00";
var min2 = "0";
var sec3 ="00";
var msec4 = "00";
var clear;

function time(){
    msec4++
    milisecond.innerHTML = msec4;
    if(msec4 >= 10){
        sec3++
        seconds.innerHTML = sec3;
        msec4 = "00";
    }
    else if(sec3 >= 5){
        min2++
        minitue.innerHTML = min2;
        sec3= "00";
    }
    else if(min2 >= 2){
        hours1++
        hourss.innerHTML = hours1;
        min2= "00";
    }
}

function start(){
    var start = document.getElementById("startbut");
    clear = setInterval(time,100);
    start.disabled = true;
}

function stop(){
    var start = document.getElementById("startbut");
    clearInterval(clear);
    start.disabled = false;
}

function reset(){
    document.getElementById("hours1").textContent = "00";
    document.getElementById("min2").textContent = "00";
    document.getElementById("sec3").textContent = "00";
    document.getElementById("msec4").textContent = "00";
    sec3 = "00";
    stop();
    clearInterval(clear);

}
    
