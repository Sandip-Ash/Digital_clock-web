const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 10);
})

const showTime =() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // let mil = date.getMilliseconds();

    hr = hr<10 ? `0${hr}`: hr;
    min = min<10 ? `0${min}`: min;
    sec = sec<10 ? `0${sec}`: sec;
    // mil = mil<10 ? `0${mil}`: mil;
    // mil = mil<100 ? `00${mil}`: mil;

    timeformat.innerHTML = hr>12? "PM" : "AM";
    hr = hr>12 ? hr-12 : hr;

    time.innerHTML = `${hr}:${min}:${sec}`;
    // console.log(hr+':'+min+':'+sec);
}