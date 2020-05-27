// DOM Elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time 

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // AM or PM 

    const AmPm = hour >= 12 ? 'PM' : 'AM';

    // 12 Hr Format
    hour = hour % 12 || 12;

    //Output 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${AmPm}`;

    setTimeout(showTime, 1000)
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting

function setGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = `url(/../landscapes/${setChooseBackground(morningPhotos)})`;
        document.body.style.backgroundSize = "cover"
        document.body.style.color = 'white';
        document.getElementById('greeting').innerText = 'Good Morning, ';
        // Morning
    } else if (hour < 16) {
        document.body.style.backgroundImage = `url(/../landscapes/${setChooseBackground(afternoonPhotos)})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.color = 'white';
        document.getElementById('greeting').innerText = 'Good Afternoon, ';
        // Afternoon
    } else if (hour < 20) {
        document.body.style.backgroundImage = `url(/../landscapes/${setChooseBackground(eveningPhotos)})`;
        document.body.style.backgroundSize = "cover"
        document.body.style.color = 'white';
        document.getElementById('greeting').innerText = 'Good Evening, ';
        // Evening
    } else {
        document.body.style.backgroundImage = `url(/../landscapes/${setChooseBackground(nightPhotos)})`;
        document.body.style.backgroundSize = "cover"
        document.body.style.color = 'white';
        document.getElementById('greeting').innerText = 'Good Evening, ';
        // Night
    }
}

let eveningPhotos = ['evening1', 'evening2', 'evening3'];
let morningPhotos = ['morning1', 'morning2', 'morning3', 'morning4'];
let afternoonPhotos = ['afternoon1', 'afternoon2', 'afternoon3', 'afternoon4'];
let nightPhotos = ['night1', 'night2', 'night3'];

function setChooseBackground(array) {
    let randomBG = Math.floor(Math.random() * array.length)
    return `${array[randomBG]}.jpg`
}

// Get Name

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name

function setName(e) {
    if (e.type == 'keypress') {
        // Check if 'Enter' was pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus

function setFocus(e) {
    if (e.type == 'keypress') {
        // Check if 'Enter' was pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setGreet();
getFocus();
getName();