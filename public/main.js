let slides = document.querySelectorAll('.slider');
let slidersIndex = 0;

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
