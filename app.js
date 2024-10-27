function digitalClock(){
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var second = document.getElementById('second');
    var duration = document.getElementById('duration');

    var hors =  new Date().getHours();
    var min =  new Date().getMinutes();
    var sec =  new Date().getSeconds();

    var period = hors >= 12 ? "PM" : "AM";

    if( hors > 12){
        hors =  hors- 12;
    }

    hors = (hors < 10) ? "0" + hors : hors;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    hours.innerHTML = hors;
    minutes.innerHTML = min;
    second.innerHTML = sec;
    duration.innerHTML = period;


};

setInterval(digitalClock,1000);