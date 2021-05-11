const leftContent = document.querySelector('.left-div');
const rightContent = document.querySelector('.right-div');
const container = document.querySelector('.container');

leftContent.addEventListener('click', e => {
    container.style.opacity = '0';

    setTimeout(() => {
        document.location.href = './html/test.html';
    }, 1000);
});

rightContent.addEventListener('click', e => {
    container.style.opacity = '0';

    setTimeout(() => {
        document.location.href = './html/kyoto.html';
    }, 1000);
});

window.onpageshow = e => {

    if (e.persisted) {
        container.style.opacity = '1';
    }

}