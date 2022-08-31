// hover on header
const headerTabs = document.querySelectorAll('.header__tab');


function hoverTabs(el) {
    el.addEventListener('mouseenter', (event) => {
        if (event.target.classList.contains('header__tab')) {
            event.target.style.transition = '0.5s';
            event.target.style.opacity = 0.3;
            event.target.style.cursor = 'pointer';
        }
    });
}

headerTabs.forEach(hoverTabs);

function unHoverTabs(el) {
    el.addEventListener('mouseleave', (event) => {
        if (event.target.classList.contains('header__tab')) {
            event.target.style.opacity = 1;
        }
    });
}

headerTabs.forEach(unHoverTabs);

// star-rating

// const starsColor = document.querySelectorAll('.path');

// function starRatingHover(el) {
//     el.addEventListener('mouseenter', (event) => {
//         if (event.target.classList.contains('path')) {
//             event.target.style.transition = '0.4s';
//             event.target.style.fill = '#FFDD3F';
//             console.log(el);
//         }
//     });
// }

// function starRatingHoverClick(el) {
//     el.addEventListener('click', (event) => {
//         if (event.target.classList.contains('path')) {
//             event.target.style.transition = '0.4s';                 stay commend
//             event.target.style.fill = '#FFDD3F';
//         }
//     });
// }

// starsColor.forEach(starRatingHover);
// starsColor.forEach(starRatingHoverClick);                      onclick

// function starRatingUnHover(el) {
//     el.addEventListener('mouseleave', (event) => {
//         if (event.target.classList.contains('path')) {
//             event.target.style.fill = '#000000';

//         }
//     });
// }
// starsColor.forEach(starRatingUnHover);

const pathColor = document.querySelectorAll('.path');

const currentRating = document.querySelector('.total-rating-count');


pathColor.forEach((path, i) => {
    path.onclick = function () {
        let currentStarLevel = i + 1;
        currentRating.innerText = `${currentStarLevel * 2}`;

        pathColor.forEach((star, j) => {
            if (currentStarLevel >= j + 1) {
                star.style.fill = '#FFDD3F';
                star.style.transition = '0.4s';
                console.log(i + 1);
            } else {
                star.style.fill = '#000000';
            }
        });
    };
});

let circularProgress = document.querySelector('.total-rating-progress');

let progressStartValue = 0;
let progressEndValue = Math.round(Number(currentRating.innerHTML));
let speed = 20;

let progress = setInterval(() => {
    progressStartValue++;

    circularProgress.style.background = `conic-gradient(#00d4be ${progressStartValue * 36}deg, #b7bacd 0deg)`;
    if (progressStartValue === progressEndValue) {
        clearInterval(progress);
    }
    console.log(progressStartValue);
}, speed);
