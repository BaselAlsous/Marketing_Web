// Start Drawer Setting
// Defintions
    let drawer = document.querySelector(' header .drawer');
// Event
    drawer.addEventListener("click", function () {
        // Defintions
            let cloneSignLink = document.querySelector('header .link-login');
            let cloneMyLinks = document.querySelector('header nav .navbar');
        // Toggle Classes
            cloneMyLinks.classList.toggle('open');
            cloneSignLink.classList.toggle('open');
    });
// End Drawer Setting

// Start Transfear Links
// Defintion
let myLinks = document.querySelectorAll('ul li a');
// Loop Elements
    myLinks.forEach(function (link) {
        // Event
            link.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = this.getAttribute('href');
                document.querySelectorAll('ul li').forEach(function(link){
                    link.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            });
    });
// End Transfear Links

// Start Button Up
    // Defintion
        let Button = document.querySelector('.buttonUp');
    // Event Setring
        window.onscroll = function () {
            if (window.pageYOffset >= 700) {
                Button.style.display = 'block';
            } else {
                Button.style.display = 'none';
            }
        };
// Event Click
    Button.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('ul li').forEach(function(link){
            link.classList.remove('active');
        });
        document.querySelector('.navbar .home').classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
// End Button Up

// Start Event Close Popup
    document.querySelector('.popup .innerPopup .exist').onclick=function(){
        document.body.style.overflowY='auto';
        document.querySelector('.popup').style.display='none';
        document.querySelector('.popup .innerPopup').style.width = "70%";
        document.querySelector('.popup .innerPopup').style.height = "700px";
        document.querySelector('.popup .innerPopup').style.display = "block";
        document.querySelector('.popup .innerPopup').style.marginLeft = "-35%";
        document.querySelector('.popup .innerPopup').style.top = "50%";
        document.querySelector('.popup .innerPopup .parent').remove();
    }
// End Event Close Popup
