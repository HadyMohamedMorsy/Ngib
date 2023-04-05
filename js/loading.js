const splashScreenForAllPages = document.getElementById('splash-screen');
const logoScreen = document.getElementById('logo-screen');


fadeIn();
// Define the fadeIn function
function fadeIn() {
    const ScreenLogo = setTimeout(()=>{
        logoScreen.classList.add('logo-active')
        clearTimeout(ScreenLogo);
    }, 2000)

    const ScreenSplash = setTimeout(()=>{
        splashScreenForAllPages.classList.add('active');
        clearTimeout(ScreenSplash);
    }, 3000)

    
}