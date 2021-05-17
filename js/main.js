const container = document.querySelector('.body');
const header = document.querySelector('.main');
const osaka = document.querySelector('.link-btn-1');
const kyoto = document.querySelector('.link-btn-2');
const home = document.querySelector('.header-title');
const anchor_1 = document.querySelector('.anchor-1');
const anchor_2 = document.querySelector('.anchor-2');
const firstWrapper = document.querySelector('.first-wrapper');
const secondWrapper = document.querySelector('.second-wrapper');

let firstWrapperHeight;
let secondWrapperHeight;

// 창 켜질 시
window.addEventListener('load', () => {
    container.style.opacity = '1';
    init();
    firstWrapperHeight = firstWrapper.offsetHeight;
    secondWrapperHeight = secondWrapper.offsetHeight * 2;
})

// Header가 Fade In되는 높이값을 지정
let height = window.innerHeight;
window.addEventListener('resize', () => {
    height = window.innerHeight;
    init(height);
});

// Header에 Fade In 효과
window.addEventListener('scroll', () => {

    if (pageYOffset >= height) {
        header.style.opacity = "1";
    } else {
        header.style.opacity = "0";
    }
});

osaka.addEventListener('click', () => { document.location.href = '../html/osaka.html' });
kyoto.addEventListener('click', () => { document.location.href = '../html/kyoto.html' });


home.addEventListener('click', () => {
    moveTo(0);
})
anchor_1.addEventListener('click', () => {
    moveTo(firstWrapperHeight)
});
anchor_2.addEventListener('click', () => {
    moveTo(secondWrapperHeight);
});

function moveTo(height) {
    window.scrollTo(0, height);
}

function init(offsetHeight) {
    firstWrapperHeight = offsetHeight;
    secondWrapperHeight = offsetHeight * 2;
}