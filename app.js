// const loginForm = document.getElementsByClassName("login-form");  
/* querySelector() => classname, tagname 모두 검색 가능 */

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit(event) {
    event.preventDefault();  
    /* preventDefault - 어떤 이벤트의 기본 동작 등이 발생되지 않도록 막는 메서드 */
    // const userName = loginInput.value;
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);  // submit - Enter키 또는 버튼 클릭 시 발생

/* func() - 함수 func을 '즉시' 실행 */