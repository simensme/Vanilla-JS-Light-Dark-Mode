const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const modeSwitch = mode => {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
    toggleIcon.children[0].textContent = `${mode} Mode`;
}

const toggleDarkLightMode = isDark => {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? modeSwitch('Dark') : modeSwitch('Light');
}

// Switch theme dynamically
const switchTheme = event => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for themes
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    } else {
        toggleSwitch.checked = false;
        toggleDarkLightMode(false);
    }
};