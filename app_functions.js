const h1 = document.querySelector(".dep h1");  // querySelectorAll 모든 거 반환 <> querySelector 맨 앞의 꺼만 반환
// const ddd = document.getElementsByClassName("dep");

// title.innerText = "Hello";  // innerText -> All 사용 시 작동 X (모든 요소에 적용)


function handleTitleClick() {
    console.log("title was clicked!");
    h1.style.color = "blue";  
}

function handleTitleClick2() {
    let h1Color = h1.style.color;
    let newColor;
    if (h1Color === "blue") {
        newColor = "yellow";
    }
    else {
        newColor = "skyblue";
    }

    h1.style.color = newColor;  // css에서 색깔 바꾸는 게 나을 수 있음. 여러 언어 쓰면 유지보수 힘듦
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "skyblue"   
}

function handleWindowCopy() {
    alert("copier!");
}

function wifiOnline() {
    alert("wifi connected!!")
}

function wifiOffline() {
    alert("wifi disconnected")
}

function handleTitleClick() {
    const clickedClass = "active";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    
}

// console.dir(title);  // event listen on~~: (ex)onmouseup)

h1.addEventListener("click", handleTitleClick);  // addEventListener(이벤트, 이벤트 발생 시 할 작업)
// title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", wifiOffline);
window.addEventListener("online", wifiOnline);