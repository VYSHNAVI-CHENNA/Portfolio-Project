var Typed = new Typed(".text-color", {
    strings:["Front-End Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

/*============================TOGGLE ICON NAVBAR============================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*======================== SCROLL SECTION LINK========================= */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*=======================Sticky navbar==========================*/
    let header= document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100)

    /*======================== REMOVETOGGLE ICON and NAVBAR when click navbar link======================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}