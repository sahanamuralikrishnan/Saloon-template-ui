const dots = document.querySelector('.dots');
const popup = document.getElementById('popup');

// Toggle popup on dots click
dots.addEventListener('click', (e) => {
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
});

const btnLogin = document.querySelector('.btn-login');
const loginDropdown = document.getElementById('login-dropdown');

// Toggle login dropdown on click
btnLogin.addEventListener('click', (e) => {
    e.stopPropagation();
    if (loginDropdown.style.display === 'flex') {
        loginDropdown.style.display = 'none';
    } else {
        loginDropdown.style.display = 'flex';
    }
});
// Change background color
// document.querySelector("h1").style.color = "yellow  ";
// document.querySelector("body").style.backgroundColor = "grey";
// document.querySelector("h1").style.fontSize = "50px";

const btnTheme = document.querySelector('.btn-theme');
if (btnTheme) {
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

// Use filter to change image color, as 'color' property doesn't affect <img> tags
const logo = document.querySelector(".logo");
if (logo) {
    // To change an image color to specific hex like #1a73e8, you need to use CSS filter generator
    // .style.color = "#1a73e8" will NOT work on <img> tags
    // Example blue filter:
    // logo.style.filter = "invert(30%) sepia(97%) saturate(1339%) hue-rotate(201deg) brightness(94%) contrast(96%)";
    logo.style.filter = "brightness(0)"; // Currently set to black
}
document.querySelector("h1").style.color = "yellow  ";
document.querySelector("body").style.backgroundColor = "grey";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector(".logo").style.color = "yellow";

DOMException