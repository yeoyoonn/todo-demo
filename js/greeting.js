// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event){
//     event.preventDefault();
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     paintGreetings(username);
//     console.dir(event);
// }

// function paintGreetings(username){
//     greeting.innerHTML = `hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);
// if (savedUsername === null){
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("click", onLoginSubmit);
// }else{
//     paintGreetings(savedUsername);
// }
