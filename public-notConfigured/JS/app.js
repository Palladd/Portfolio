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



// START OF LOAD PAGE JS
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
// END OF LOAD PAGE JS



// !!! THEME CHANGER !!!
const mainBg = document.querySelectorAll('.darkBackground')
const darkColor = document.querySelectorAll('.darkColor')
const dark_lightColor = document.querySelectorAll('.dark-lightColor')
const brightColor = document.querySelectorAll('.brightColor')
const bright_DarkColor = document.querySelectorAll('.bright-darkColor')

// Footer
const dark_whiteColorFoot = document.querySelectorAll('.dark-whiteColorFoot')
const whiteColorTitleFoot = document.querySelectorAll('.whiteColorTitleFoot')

// Waves
const floatingBgUpDark = document.querySelectorAll('.floatingBgUpDark')
const floatingBgDownDark = document.querySelectorAll('.floatingBgDownDark')

// Buttons
const darkModeBtn = document.querySelector('.DarkModeButton')
const btnSpanDarkMode = document.querySelector('.spanOfDarkModeButton')


const themeChanger = () => {
    // Background
    mainBg.forEach(i => {i.classList.toggle('brightBackground')}) 
    mainBg.forEach(i => {i.classList.toggle('darkBackground')}) 

    // Waves
    floatingBgUpDark.forEach(i => {i.classList.toggle('floatingBgUpDark')})
    floatingBgUpDark.forEach(i => {i.classList.toggle('floatingBgUpBright')}) 

    floatingBgDownDark.forEach(i => {i.classList.toggle('floatingBgDownDark')})
    floatingBgDownDark.forEach(i => {i.classList.toggle('floatingBgDownBright')})
    
    // Text & icons
    brightColor.forEach(i => {i.classList.toggle('darkColor')})
    brightColor.forEach(i => {i.classList.toggle('brightColor')})

    dark_lightColor.forEach(i => {i.classList.toggle('dark-lightColor')})
    bright_DarkColor.forEach(i => {i.classList.toggle('dark-lightColor')})

    // Footer
    dark_whiteColorFoot.forEach(i => {i.classList.toggle('dark-whiteColorFoot')})
    dark_whiteColorFoot.forEach(i => {i.classList.toggle('darkColorFoot')})

    whiteColorTitleFoot.forEach(i => {i.classList.toggle('whiteColorTitleFoot')})
    whiteColorTitleFoot.forEach(i => {i.classList.toggle('darkColorTitleFoot')})

    if(mainBg[0].classList.contains('brightBackground')) {
        darkModeBtn.innerHTML = "Dark Mode OFF";
        darkModeBtn.classList.remove('statusChangeGreen')
        darkModeBtn.classList.add('statusChangeRed')
    }
    else if(mainBg[0].classList.contains('darkBackground')) {
        darkModeBtn.innerHTML = "Dark Mode ON";
        darkModeBtn.classList.add('statusChangeGreen')
        darkModeBtn.classList.remove('statusChangeRed')
    }
}
darkModeBtn.addEventListener('click', themeChanger)



// Site zoom changer
document.body.style.zoom="110%"