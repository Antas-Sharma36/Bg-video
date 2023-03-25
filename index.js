const btn = document.querySelector(".btn")
const video = document.querySelector(".bg-video")
const fa = document.querySelector(".fa")
const preloader = document.querySelector(".preloader")

btn.addEventListener("click",()=>{
    if (btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play()
        fa.classList.add("fa-pause")
        fa.classList.remove("fa-play")

       
    } else {
        btn.classList.add("pause")
        video.pause()
        fa.classList.add("fa-play")
        fa.classList.remove("fa-pause")
    }
});

window.addEventListener("load",()=>{
    preloader.style.zIndex = "-2"
})