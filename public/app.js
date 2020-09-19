const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li ');
    const aTagClick = document.querySelector('.aTag');
    const navHide = document.querySelector("#hide");

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('open');
        navLinks.forEach(link => {
                link.classList.toggle("fade");
            })
            //Animate Link
        navLinks.forEach((link, index) => {
            if (link.animation) {
                link.animation = '';
            } else {
                link.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}
navSlide();
window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
const navScroll = document.querySelector('nav');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) {
        navScroll.classList.add('hide');
    } else {
        navScroll.classList.remove('hide');
    }
    prevScrollPos = currentScrollPos;
});









// Your web app's Firebase configuration
/* var firebaseConfig = {
    apiKey: "AIzaSyCl3qbX7QbRFB5ee8-08wLz4lPF5fQcUlA",
    authDomain: "munteanu-florin-web-app.firebaseapp.com",
    databaseURL: "https://munteanu-florin-web-app.firebaseio.com",
    projectId: "munteanu-florin-web-app",
    storageBucket: "munteanu-florin-web-app.appspot.com",
    messagingSenderId: "1052825525646",
    appId: "1:1052825525646:web:e643a17ef2662a665198df",
    measurementId: "G-2HZGE1Q03V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); */