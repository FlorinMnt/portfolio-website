/* menu show/hidden */
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});
/* remove menu */
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* scroll section */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ' ]').classList.add('active');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ' ]').classList.remove('active');
        }
    });
}




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