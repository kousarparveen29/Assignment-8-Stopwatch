                          // **** CLOCK ***



var time;
var formate;
function clock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var hr = document.getElementById("hours");
    var mint = document.getElementById("minutes");
    var secnd = document.getElementById("seconds");
    if (h < 12) {
        formate = "AM";
    }
    else {
        formate = "PM";
    }
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
    }
    hr.innerHTML = value(h);
    mint.innerHTML = value(m);
    secnd.innerHTML = value(s);
    document.getElementById("am").innerHTML = formate;

}

time = setInterval(clock, 1);


                           // **** STOPWATCH ****


                           
var hour = 0;
var min = 0;
var sec = 0;
var mili = 0;
var hours = document.getElementById("hrs");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliseconds = document.getElementById("mili");
var interval;

function value(t) {
    if (t <= 9) {
        t = "0" + t;
    }
    return t;
}


function stopwatch() {
    mili++;
    miliseconds.innerHTML = value(mili);
    if (mili == 100) {
        sec++;
        seconds.innerHTML = value(sec);
        mili = 0;
    }
    else if (sec == 60) {
        min++;
        minutes.innerHTML = value(min);
        sec = 0;
        seconds.innerHTML = value(sec);

    }
    else if (min == 60) {
        hour++;
        hours.innerHTML = value(hour);
        min = 0;
        minutes.innerHTML = value(min);
    }
}

function start() {
    var btnStart = document.getElementById("btnStart");
    btnStart.style.display = "none";
    var btnStop = document.getElementById("btnStop");
    btnStop.style.display = "inline-block";
    interval = setInterval(stopwatch, 10);
}

function stop() {
    var btnStop = document.getElementById("btnStop");
    btnStop.style.display = "none";
    var btnStart = document.getElementById("btnStart");
    btnStart.style.display = "inline-block";
    clearInterval(interval);
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    mili = 0;
    hours.innerHTML = value(hour);
    minutes.innerHTML = value(min);
    seconds.innerHTML = value(sec);
    miliseconds.innerHTML = value(mili);
    stop();
}

