// const loginForm = document.getElementsByClassName("login-form");  
/* querySelector() => classname, tagname 모두 검색 가능 */

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // String, 중요한 정보 아닐 경우 대문자로

// const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();  
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;  // == greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* preventDefault - 어떤 이벤트의 기본 동작 등이 발생되지 않도록 막는 메서드 */
// const userName = loginInput.value;

loginForm.addEventListener("submit", onLoginSubmit);  // submit - Enter키 또는 버튼 클릭 시 발생

// link.addEventListener("click", handleLinkClick);  // 클릭 시 JS에서 실행시킴(addEventListener 안에 있는 함수는 직접 실행하지 않음)

/* func() - 함수 func을 '즉시' 실행 */