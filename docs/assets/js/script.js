
function replaceTextInHeader(){
    const checkReplace = document.querySelector(".rolling-text");
    if(checkReplace != null){
        const replace = new ReplaceMe(checkReplace, {
            animation: 'animated fadeOut',
            speed: 1000,
            separator: ",",
            loopCount: 'infinite',
            autoRun: true
        });
    }
}

function userScroll(){
    const navbar = document.querySelector(".navbar");
    // const toTop = document.querySelector("#to-top");

    // toTop.addEventListener("click", () => {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // })

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('bg-white');
            navbar.classList.add('shadow');
            navbar.classList.add("navbar-sticky");
            // toTop.classList.add("show");
        }
        else{
            navbar.classList.remove('bg-white');
            navbar.classList.remove('shadow');
            navbar.classList.remove("navbar-sticky");
            // toTop.classList.remove("show");
        }
    })
}

function showCurrentNavigationActive(){

    let navItems = {"#": "home-menu", "#contact": "contact-menu", "#about": "about-menu", "#services": "services-menu"};;
    window.addEventListener('scroll', () => {
        
    })
}

document.addEventListener("DOMContentLoaded", userScroll)
document.addEventListener("DOMContentLoaded", replaceTextInHeader);