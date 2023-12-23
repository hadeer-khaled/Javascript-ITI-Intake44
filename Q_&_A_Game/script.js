function startGame(){
    var userName=prompt("Hi, Say Your Name") //Validate the name
    alert(`Hi,${userName} please answer the Following Questions`)

    var userAge=prompt(`How old Are You ?!`)
    if(userAge == "" || Number(userAge) < 0){
        alert("Please Enter valid Number")
    } 
    else if(Number(userAge)<15){
        alert(`Sorry! you are a child.`)
    }
    else if(Number(userAge)>15) {

        alert(` Ok! good enough to Complete.`)
        var userAnswer=prompt(`Reply by yes or No | do you think programming is good for you ?`)
        userAnswer = userAnswer.toLowerCase()

        switch(userAnswer){
            case "yes":
                alert(`Sorry to say it | but you Have A mental issues 🙂`)   
                break;

            case "no":
                alert(`Mee too , thank you for telling us , I will give you a somthing `)   
                var userChoise=prompt(`reply by ( advise || info || thanks )`)
                userChoise = userChoise.toLowerCase()
                switch(userChoise){
                    case "advise":
                        alert(`“Learn as if you will live forever, live like you will die tomorrow.”
                         — Mahatma Gandhi`)
                        break;
                    case "info":
                        alert("Cats use their whiskers to “feel” the world around them in an effort to determine which small spaces they can fit into.A cat’s whiskers are generally about the same width as its body. (This is why you should never, EVER cut their whiskers. 🐾 ❤")
                        break;
                    case "thanks":
                        alert(`Thank you ${userName} ❤`)
                        break;
                    default:
                        alert(`Invalid Input 😣`)
                        break;

                    }
                break;
                default:
                    alert(`I said reply with YES or NO 😡`)
        }
        
        
    }
    else{
        alert("Invalid Input")
    }
}