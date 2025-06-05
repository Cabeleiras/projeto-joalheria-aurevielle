window.addEventListener('load', () => {
    document.querySelector('main').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('main').style.transition = 'opacity 1s';
        document.querySelector('main').style.opacity = 1;
    }, 100);
});