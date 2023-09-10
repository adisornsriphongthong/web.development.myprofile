addEventListener('scroll', myFunctionScrollY);

function myFunctionScrollY(){
    let value = window.scrollY;
    value = Math.round(value);

    document.getElementById("background-profile").style.transform = "translateY(" + -value + "px)";
    document.getElementById("move-interface-1").style.transform = "translateY(" + -value + "px)";
    document.getElementById("move-profile").style.transform = "translateY(" + -value + "px)";
}

let song_easy = document.getElementById("song_easy");
let button_play_and_pause = document.getElementById("button-play-and-pause");
let image_play_pause = document.getElementById("image-play-pause");
let on_off_song = true;

button_play_and_pause.addEventListener('click', myFunctionClickSong);
function myFunctionClickSong(){
    if(on_off_song){
        song_easy.play();
        on_off_song = false;
        image_play_pause.src = "Images/pause.png";
    }else{
        song_easy.pause();
        on_off_song = true
        image_play_pause.src = "Images/play-button.png";
    }
}

/*addEventListener('mousemove', events);
function events(e){
        document.getElementById('star').style.transform = "translateX(" + e.clientX / 150 + "px)" + "translateY(" + e.clientY / 100 + "px)";
}*/


let button_burger = document.getElementById('button-burger-click');

button_burger.addEventListener('click', myFucntionClickBurger);

let on_off_bar = true;
function myFucntionClickBurger(){
    if(on_off_bar){
        document.getElementById('image-burger').src = "Images/cancel.png"
        document.getElementById('bar-contact-on-off').style.visibility = "visible";
        
        on_off_bar = false;
    }else{
        document.getElementById('image-burger').src = "Images/burger-menu.png"
        document.getElementById('bar-contact-on-off').style.visibility = "hidden";

        on_off_bar = true;
    }
}


window.onload = function(){
    document.getElementById('move-text-ccenter').style.marginTop = "0px";
    document.getElementById('move-text-ccenter').style.transition = "0.8s"
}
