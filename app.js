let hoursId = document.getElementById('hours')
let minutesId = document.getElementById('minutes')
let secondsId = document.getElementById('seconds')

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if (h>12){
        h = h-12;
    }

    h = (h<10) ? "0" + h : h
    m = (m<10) ? "0" + m : m
    s = (s<10) ? "0" + s : s

    hoursId.innerText = h
    minutesId.innerText = m
    secondsId.innerText = s

    setInterval(()=>{
        updateClock()
    },1000)
}

updateClock()