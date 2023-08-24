const audio=document.querySelector(".button-play");
const music=document.getElementById("song");
const iconElement=audio.querySelector(".icon");
audio.addEventListener('click',()=>{
    if(music.paused)
    {
        music.play();
        audio.textContent="PAUSE VIBE";
        iconElement.textContent = '\u23F8'; // Unicode for pause symbol
    }
    else
    {
        music.pause();
        audio.textContent="PLAY VIBE";
        iconElement.textContent = '\u25B6'; // Unicode for play symbol
    }
    
});
