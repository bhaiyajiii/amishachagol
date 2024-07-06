// DOM Elements
const letterBox = document.querySelector('.letter-box');
const touchHere = document.querySelector('.touch-here');
const pageContainer = document.querySelector('#page-container');
const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-button');
const countdown = document.querySelector('#countdown');
const backgroundMusic = document.querySelector('#background-music');

// Global Variables
let currentPageIndex = 0;
const totalPages = pages.length;
let timer;

// Event Listeners
letterBox.addEventListener('click', openLetterBox);

navButtons.forEach(button => {
    button.addEventListener('click', navigatePages);
});

// Functions
function openLetterBox() {
    letterBox.classList.add('hidden');
    pageContainer.classList.remove('hidden');
  
    playBackgroundMusic();
}

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date();
        const timeDifference = now - targetDate;

        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        const countdown = document.getElementById('countdown');
        countdown.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the countdown immediately
}

// Set the target date to July 7, 2007
const targetDate = new Date('2007-07-07T00:00:00');
startCountdown(targetDate);


function playBackgroundMusic() {
    backgroundMusic.play();
}

function navigatePages(event) {
    const direction = event.target.dataset.direction;

    if (direction === 'next') {
        currentPageIndex++;
        if (currentPageIndex >= totalPages) {
            currentPageIndex = totalPages - 1;
        }
    } else if (direction === 'prev') {
        currentPageIndex--;
        if (currentPageIndex < 0) {
            currentPageIndex = 0;
        }
    }

    updatePageVisibility();
}

function updatePageVisibility() {
    pages.forEach((page, index) => {
        if (index === currentPageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
   
}
