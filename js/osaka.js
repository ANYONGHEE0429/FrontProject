const mainContent = document.querySelector('.main-content');
const title = document.querySelector('.first-warpper-title');

new ScrollMagic
    .Scene({
        triggerElement: mainContent,
        triggerHook: .5,
    })
    .setClassToggle(title, 'show')
    .addTo(new ScrollMagic.Controller());