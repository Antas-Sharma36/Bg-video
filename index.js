const btn = document.querySelector(".btn");
const video = document.querySelector(".bg_video");
const fa = document.querySelector(".fa-solid");

btn.addEventListener("click",()=>{
    console.log(btn.classList.values);
    if ( btn.classList.contains("pause") ){
        btn.classList.remove("pause");
        video.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
        console.log("Playing");
    } else if (  !(btn.classList.contains("pause") || btn.classList.contains("play")) ){
        video.play();
        console.log(btn.classList.value);
        fa.classList.remove("play");
        
        fa.classList.add("pause");
        console.log(btn.classList.value);
        
        
    } 
    else {
        btn.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
        console.log("Pausing");
    } 
})