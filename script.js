let name = prompt('Halo! Siapa nama anda? ')
alert(`Selamat Datang ${name}!`);
let navbar = document.getElementById("nav");
let sections = document.querySelectorAll('section')
window.onscroll = () => {
    "use strict";
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }

    sections.forEach(section=> {
        let current = ''
        let sectionTop = section.offsetTop;
        if(scrollY >= sectionTop-500) {
            current = section.getAttribute('id');
            if(current == 'dashboard') {
                document.getElementById('home').classList.add('active')
                document.getElementById('a-about').classList.remove('active')
                document.getElementById('a-project').classList.remove('active')
                document.getElementById('a-contacts').classList.remove('active')
            } else if(current == 'about') {
                document.getElementById('a-about').classList.add('active')
                document.getElementById('home').classList.remove('active')
                document.getElementById('a-project').classList.remove('active')
                document.getElementById('a-contacts').classList.remove('active')
            } else if(current == 'project') {
                document.getElementById('a-project').classList.add('active')
                document.getElementById('a-about').classList.remove('active')
                document.getElementById('home').classList.remove('active')
                document.getElementById('a-contacts').classList.remove('active')
            } else if(current == 'contacts') {
                document.getElementById('a-contacts').classList.add('active')
                document.getElementById('a-about').classList.remove('active')
                document.getElementById('home').classList.remove('active')
                document.getElementById('a-project').classList.remove('active')
            }
        }
    })

};