function updateClock() {
    const currentDateTime = new Date ();

    // time 
    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    let seconds = currentDateTime.getSeconds();


    // am-pm 
    let ampm = hours >= 12 ? "PM" : "AM";


    // 12 hr convert
    hours = hours % 12 || 12;


    // 2 digit 
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    // display time 
    document.getElementById("clock-time").innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;

}

setInterval(updateClock, 1000);
updateClock();