const btn = document.querySelector(".btn");
const video = document.querySelector(".bg_video");
const fa = document.querySelector(".fa");

btn.addEventListener("click",()=>{

// if video is paused -          
    if ( !(btn.classList.contains("play")) || btn.classList.contains("pause")){

        btn.classList.remove("pause");
        btn.classList.add("play");
        video.play();
        fa.classList.remove("fa-play");
        fa.classList.add("fa-pause");


    } else {

// if video is playing -   

        btn.classList.add("pause");
        video.pause(); 
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
        console.log("b");
    }
})
