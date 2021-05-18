const mainContent = document.querySelector('.main-content');
const title = document.querySelector('.first-warpper-title');
const section1 = document,querySelector('.section-1');
const section2 = document,querySelector('.section-2');

new ScrollMagic
    .Scene({
        triggerElement: mainContent,
        triggerHook: .5,
    })
    .setClassToggle(title, 'show')
    .addTo(new ScrollMagic.Controller());