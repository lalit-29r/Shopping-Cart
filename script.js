const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

document.addEventListener("DOMContentLoaded", function(event)  {
    wrapper.style.opacity = 1;
})

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
})

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
})