var text1Elem = document.getElementById("text1")
var text2Elem = document.getElementById("text2")

text1Elem.addEventListener("keyup" , function (){
    text2Elem.innerHTML =text1Elem.value ;
})
btn1.addEventListener("click" , function (){
    text2Elem.className = "ch1"
    h2.innerHTML = "Font Name : Lobster"
})
btn2.addEventListener("click" , function (){
    text2Elem.className = "ch2"
    h2.innerHTML = "Font Name : Wallpoet"
})
btn3.addEventListener("click" , function (){
    text2Elem.className = "ch3"
    h2.innerHTML = "Font Name : shadows"
})
btn4.addEventListener("click" , function (){
    text2Elem.className = "ch4"
    h2.innerHTML = "Font Name : zcool"
})


