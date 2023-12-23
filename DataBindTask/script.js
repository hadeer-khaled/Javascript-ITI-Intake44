var img = document.querySelector(".image")
var nameElem = document.querySelector(".name").firstElementChild
var position = document.querySelector(".position").firstElementChild


function showWael(){
    nameElem.innerHTML = "Wael Al-Dahdouh";
    position.innerHTML = "Palestinian journalis";
    img.src ="wael.jpg";
    img.alt ="Wael Al-Dahdouh";
}
function showSamer(){
    nameElem.innerHTML = "Samer Abu Daqqa";
    position.innerHTML = "Al Jazeera cameraman";
    img.src ="samer.jpg";
    img.alt ="Samer Abu Daqqa";
}