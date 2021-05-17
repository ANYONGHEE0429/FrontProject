const container = document.querySelector('.body');
const header = document.querySelector('.main');
const osaka = document.querySelector('.link-btn-1');
const kyoto = document.querySelector('.link-btn-2');
const anchor_1 = document.querySelector('.anchor-1');
const anchor_2 = document.querySelector('.anchor-2');
const firstWrapper = document.querySelector('.first-wrapper');
const secondWrapper = document.querySelector('.second-wrapper');

let firstWrapperHeight;
let secondWrapperHeight;

// Header가 Fade In되는 높이값을 지정
let height = window.innerHeight;
window.addEventListener('resize', () => {
    height = window.innerHeight;
});


// Header에 Fade In 효과
window.addEventListener('scroll', () => {

    if (pageYOffset >= height) {
        header.style.opacity = "1";
    } else {
        header.style.opacity = "0";
    }
});


// 창 켜질 시 전체 요소에 Fade In 효과
window.addEventListener('load', () => {
    container.style.opacity = '1';
    firstWrapperHeight = firstWrapper.offsetHeight;
    secondWrapperHeight = secondWrapper.offsetHeight * 2;
})

window.addEventListener('resize', () => {
    firstWrapperHeight = firstWrapper.offsetHeight;
    secondWrapperHeight = secondWrapper.offsetHeight * 2;
})

osaka.addEventListener('click', () => { document.location.href = '../html/osaka.html' });
kyoto.addEventListener('click', () => { document.location.href = '../html/kyoto.html' });

anchor_1.addEventListener('click', () => {
    console.log("First");
    window.scrollTo(0, firstWrapperHeight);
});


anchor_2.addEventListener('click', () => {
    console.log("Second");
    window.scrollTo(0, secondWrapperHeight);
});