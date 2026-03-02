console.log("Day 1 Task Loaded");

//Hamburger 
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

//Searching Bar
function openPopup(){
    let value = document.getElementById("searchInput").value;
    if(value.trim()===""){
        document.getElementById("popupText").innerText="Please type my name";
    } else {
        document.getElementById("popupText").innerText="You searched for: " + value + "a";
    }
    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}
