var inputElem = document.getElementById("password")
var imgElem = document.getElementById("img")
var msgElem = document.getElementById("msg")
function checkPassword(){
    var userPass = Number(inputElem.value)
    if (userPass == 12345){
        imgElem.classList.remove("blur")
    }
    else
    {
        msgElem.style.display="block"
    }
    inputElem.value = "";    
}
inputElem.addEventListener('keydown' , function(){
    msgElem.style.display="none"

})