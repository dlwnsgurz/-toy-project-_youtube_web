const moreBtn = document.querySelector('.info .videoinformation .moreinformation');
const title = document.querySelector('.info .videoinformation .titleandinfobutton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});