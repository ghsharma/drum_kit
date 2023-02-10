
for(var i=0 ; i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    MakeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

});
}


//detecting keyboard press.
    document.addEventListener("keypress", function(event){
       MakeSound(event.key);
       buttonAnimation(event.key);
    });


function MakeSound(key){

    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

         case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

         case "l":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;

        default:

            break;
    }

}

function buttonAnimation(currentKey) {

    var ActiveButton = document.querySelector("." + currentKey);

    ActiveButton.classList.add("pressed");

    setTimeout(function() {
        ActiveButton.classList.remove("pressed");
    },100);
   
}
