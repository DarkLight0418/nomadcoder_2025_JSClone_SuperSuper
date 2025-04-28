const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
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

h1.addEventListener("click", handleTitleClick);