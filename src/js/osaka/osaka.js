const mainContent = document.querySelector('.main-content');
const title = document.querySelector('.first-warpper-title');

const array = document.querySelectorAll('.section');
const wrapper = document.querySelector('.wrapper');

// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

const imgBack = document.querySelector('.img-back');
const imgCover = document.querySelector('.img-cover');

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


new ScrollMagic
    .Scene({
        triggerElement: array[1],
        triggerHook: .5
    })
    .setClassToggle(imgBack, 'show')
    .addTo(new ScrollMagic.Controller());

new ScrollMagic
    .Scene({
        triggerElement: array[1],
        triggerHook: .2
    })
    .setClassToggle(imgCover, 'show')
    .addTo(new ScrollMagic.Controller());


window.addEventListener('load', () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].offsetTop == pageYOffset) {
            currentSection = i;
            pageYOffset = array[currentSection].offsetTop;
        }
    }
});

window.addEventListener('resize', () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].offsetTop == pageYOffset) {
            currentSection = i;
            pageYOffset = array[currentSection].offsetTop;
        }
    }
});

wrapper.addEventListener('wheel', e => {


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
        }, 1300);

    }
 
}

// prev.addEventListener('click', () => {

//     if ( currentSection <= 0 ) { return }
//     else {
//         currentSection--;
//         scrollTo( {top: array[currentSection].offsetTop, behavior: 'smooth'} )
//     }

// });

// next.addEventListener('click', () => {
    
//     if ( currentSection >= array.length-1 ) { return }
//     else {
//         currentSection++;
//         scrollTo( {top: array[currentSection].offsetTop, behavior: 'smooth'} )
//     }

// })