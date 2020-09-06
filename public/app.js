const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li ')

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle')
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
// Your web app's Firebase configuration
var firebaseConfig = {
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
firebase.analytics();