const title = document.querySelector(".dep h1");  // querySelectorAll 모든 거 반환 <> querySelector 맨 앞의 꺼만 반환
// const ddd = document.getElementsByClassName("dep");

// title.innerText = "Hello";  // innerText -> All 사용 시 작동 X (모든 요소에 적용)


function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";  
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

// console.dir(title);  // event listen on~~: (ex)onmouseup)

title.addEventListener("click", handleTitleClick);  // addEventListener(이벤트, 이벤트 발생 시 할 작업)
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);