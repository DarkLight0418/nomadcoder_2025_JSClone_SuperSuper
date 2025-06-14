const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();  // 시간 불러오기
    const hours = String(date.getHours()).padStart(2, "0");  // String으로 감싸면 String으로 됨
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

getClock();

setInterval(getClock, 1000);

// setInterval(함수, ms); interval - (매번의) 계속 시간을 업데이트 하고 싶어요 setInterval()
// 1000ms == 1초

