const button = document.querySelector("#SignUpButton")
const input = document.querySelector("#SignUpInput")
const message = document.querySelector(".SignUpMessage")

button.addEventListener('click', () => {
    if (input.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        message.style.display = "block"
        message.style.color = "#7AB55C"
        message.innerText = "Success"
        input.value = "" 
    } else {
        message.style.display = "block"
        message.style.color = "#C23628"
        message.innerText = "Please enter a valid email address"
    }
})