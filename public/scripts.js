
let pages = document.getElementsByClassName('pages')[0].childNodes;

function removeAllId() {
    pages.forEach(element => {
        if (element !== null) {
            if (element.id !== null) {
                element.id = "";
            }
        }
    });
}

function checkStatus() {
    pages.forEach(element => {
        if (element.nextSibling !== null) {
            if (element.nextSibling.nodeName === "A") {
                if (element.nextSibling.id === 'current-page') {
                    element.nextSibling.style.color = '#F58500';
                } else {
                    element.nextSibling.style.color = '#000';
                }
            }
        }
    });
}

function addStatus(e) {
    removeAllId();
    e.srcElement.id = 'current-page';
    checkStatus()
}

pages.forEach(element => {
    element.addEventListener('click', (event) => addStatus(event));
    
});


let acc = document.getElementsByClassName("accordion-wrapper");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    let ez = document.getElementsByClassName("accordion")[i];
    ez.classList.toggle("active");
    let accWrap = this.parentElement;
    accWrap.classList.toggle('active');
    let panel = ez.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".pages");
hamburger.addEventListener("click", () => mobileMenu());

function mobileMenu() {
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.getElementsByTagName("header")[0].classList.toggle("active");
}

const navLink = document.querySelectorAll(".pages")[0];

navLink.childNodes.forEach(n => {
    if (n.nodeName !== "#text")
    {
    n.addEventListener("click", closeMenu);
}});

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}