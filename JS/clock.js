const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

getClock();

setInterval(getClock, 1000);

// setInterval(함수, ms); interval - (매번의)

