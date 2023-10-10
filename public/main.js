let slides = document.querySelectorAll('.slider');
let slidersIndex = 0;
let elVideo = document.getElementById('videos');

function slideShow()
{
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slidersIndex++;

    if(slidersIndex > slides.length)
    {
        slidersIndex = 1;
    }


    slides[slidersIndex-1].style.display= window.innerWidth < 810 ? 'block' : 'flex';

    setTimeout(slideShow, 3000);
}

slideShow();

document.addEventListener('DOMContentLoaded', function(){
    let eleVideo = document.createElement('video');

    eleVideo.src = "img/videos/room_v.mp4";
    eleVideo.controls = false;
    eleVideo.autoplay = false;
});
