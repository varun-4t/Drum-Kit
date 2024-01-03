for(let i=0;i<7;i++){
    document.querySelectorAll('button')[i].addEventListener("click",function(){
        switch(i){
            case 0:
                let audio0 = new Audio("sounds/tom-1.mp3");
                audio0.play();
                break;
            case 1:
                let audio1 = new Audio("sounds/tom-2.mp3");
                audio1.play()
                break;
            case 2:
                let audio2 = new Audio("sounds/tom-3.mp3");
                audio2.play();
                break;
            case 3:
                let audio3 = new Audio("sounds/tom-4.mp3");
                audio3.play()
                break;
            case 4:
                let audio4 = new Audio("sounds/snare.mp3");
                audio4.play();
                break;
            case 5:
                let audio5 = new Audio("sounds/crash.mp3");
                audio5.play()
                break;
            case 6:
                let audio6 = new Audio("sounds/kick-bass.mp3");
                audio6.play();
                break;
        }
    })       
}

document.addEventListener("keyup",function(e){
    remove(e.key)});
document.addEventListener("keydown", function(e){
    buttonAnimation(e.key);
    switch(e.key){
        case "w":
            let audio0 = new Audio("sounds/tom-1.mp3");
            audio0.play();
            break;
        case "a":
            let audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play()
            break;
        case "s":
            let audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;
        case "d":
            let audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play()
            break;
        case "j":
            let audio4 = new Audio("sounds/snare.mp3");
            audio4.play();
            break;
        case "k":
            let audio5 = new Audio("sounds/crash.mp3");
            audio5.play()
            break;
        case "l":
            let audio6 = new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;          
    }
})

function buttonAnimation(button){
    ele=document.querySelector("."+button);
    ele.classList.add("pressed");
}

function remove(button){
    ele=document.querySelector("."+button);
    ele.classList.remove("pressed");
}

