console.log("Day 1 Task Loaded");

// Hamburger Menu
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

// Searching Bar
function openPopup(){
    let value = document.getElementById("searchInput").value;

    if(value.trim()===""){
        document.getElementById("popupText").innerText="Please type something different 😊";
    } 
    else{
        document.getElementById("popupText").innerText="You searched for: " + value + " ❤️";
    }

    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

// Notification Banner
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");
const container = document.getElementById("notificationContainer");

successBtn.addEventListener("click", ()=>{
    showNotification("success","Success: Project saved!");
});

errorBtn.addEventListener("click", ()=>{
    showNotification("error","Error: Failed to fetch data.");
});

function showNotification(type,message){

    const notification = document.createElement("div");
    notification.classList.add("notification",type);

    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;

    container.appendChild(notification);

    // Auto remove
    setTimeout(()=>{
        notification.remove();
    },5000);

    // Manual close
    notification.querySelector(".close-btn")
    .addEventListener("click",()=>{
        notification.remove();
    });
}

// Contact Form
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Name validation
function validateName(){

if(nameInput.value.trim().length < 3){

nameError.textContent="Name must be at least 3 characters long.";
nameInput.classList.add("error-border");
nameInput.classList.remove("success");

return false;

}else{

nameError.textContent="";
nameInput.classList.remove("error-border");
nameInput.classList.add("success");

return true;

}

}

// Email validation
function validateEmail(){

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(emailInput.value.trim())){

emailError.textContent="Enter a valid email address.";
emailInput.classList.add("error-border");
emailInput.classList.remove("success");

return false;

}else{

emailError.textContent="";
emailInput.classList.remove("error-border");
emailInput.classList.add("success");

return true;

}

}

// Message validation
function validateMessage(){

if(messageInput.value.trim().length < 10){

messageError.textContent="Message must be at least 10 characters.";
messageInput.classList.add("error-border");
messageInput.classList.remove("success");

return false;

}else{

messageError.textContent="";
messageInput.classList.remove("error-border");
messageInput.classList.add("success");

return true;

}

}

// Form check
function checkFormValidity(){

if(validateName() && validateEmail() && validateMessage()){

submitBtn.disabled=false;

}else{

submitBtn.disabled=true;

}

}

nameInput.addEventListener("input",checkFormValidity);
emailInput.addEventListener("input",checkFormValidity);
messageInput.addEventListener("input",checkFormValidity);

// Submit
form.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully ✅");

form.reset();

submitBtn.disabled=true;

});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(window.scrollY > 200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

// Click to go top
topBtn.addEventListener("click",function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});
