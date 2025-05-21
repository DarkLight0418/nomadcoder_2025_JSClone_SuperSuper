// const loginForm = document.getElementsByClassName("login-form");  
/* querySelector() => classname, tagname 모두 검색 가능 */

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

// const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();  
    /* preventDefault - 어떤 이벤트의 기본 동작 등이 발생되지 않도록 막는 메서드 */
    // const userName = loginInput.value;
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    alert("clicked!!");
}

loginForm.addEventListener("submit", onLoginSubmit);  // submit - Enter키 또는 버튼 클릭 시 발생

// link.addEventListener("click", handleLinkClick);  // 클릭 시 JS에서 실행시킴(addEventListener 안에 있는 함수는 직접 실행하지 않음)

/* func() - 함수 func을 '즉시' 실행 */