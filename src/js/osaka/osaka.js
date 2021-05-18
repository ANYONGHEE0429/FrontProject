const mainContent = document.querySelector('.main-content');
const title = document.querySelector('.first-warpper-title');

const array = document.querySelectorAll('.section');
const wrapper = document.querySelector('.wrapper');

let wheel = 0;
let currentSection = 0;

new ScrollMagic
    .Scene({
        triggerElement: mainContent,
        triggerHook: .5,
    })
    .setClassToggle(title, 'show')
    .addTo(new ScrollMagic.Controller());

let direction = '';
let flag = false;

window.addEventListener('wheel', e => {

    e.preventDefault();

    // 스크롤을 아래로 내림
    if (0 < e.deltaY) {
        if ( currentSection >= array.length-1 ) { return }
        else {
            direction = 'up';
            pageMove(direction);
        }
    } 

    // 스크롤을 위로 올림
    if (0 > e.deltaY) {

        if ( currentSection <= 0 ) { return } 
        else {
            direction = 'down';
            pageMove(direction);
        }
    }

}, { passive: false} )

function pageMove(direction) {
    
    if (flag === false) { 

        flag = true;
        if (direction === 'up') {
            scrollTo( {top: array[currentSection+1].offsetTop, behavior: 'smooth'} )
            currentSection++;
        }
        if (direction === 'down') {
            scrollTo( {top: array[currentSection-1].offsetTop, behavior: 'smooth'} )
            currentSection--;
        }

        setTimeout(() => {
            flag = false;
        }, 1500);

    }
 
}