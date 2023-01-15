const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide')
hiddenElements.forEach((el) => observer.observe(el))

// CODE ABOVE FROM FIRESHIP.IO

const pageLoad = document.querySelector('.bodyShow')
const loadPageView = document.querySelector('.loadPage')

const pageLoadTimeout = (params) => {
    pageLoad.classList.add('showedBody')
}

const pageLoadTimeoutScreen = () => {
    loadPageView.classList.add('loadPageHidden')
}

setTimeout(pageLoadTimeout, 2000)
setTimeout(pageLoadTimeoutScreen, 4600)