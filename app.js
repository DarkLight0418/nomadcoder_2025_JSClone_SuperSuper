// const loginForm = document.getElementsByClassName("login-form");  
/* querySelector() => classname, tagname 모두 검색 가능 */
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function onleLoginBtnClick() {
    console.log(loginInput.value);
    console.log("click!!");
}

loginButton.addEventListener("click", onleLoginBtnClick);