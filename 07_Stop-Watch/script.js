let timerDisplay = document.querySelector('.timerDisplay')
let startBtn = document.querySelector('#startBtn')
let stopBtn = document.querySelector('#stopBtn')
let resetBtn = document.querySelector('#resetBtn')

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;


startBtn.addEventListener('click', () => {

    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);

});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);

});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
})

function startTimer() {

    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;

        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secscstring = secs < 10 ? `0${secs}` : secs;
    let minsstring = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsstring} : ${secscstring} : ${msecstring}`
}



