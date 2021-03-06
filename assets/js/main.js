/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

/*==================== VIDEO ====================*/
// const videoFile = document.getElementById('video-file'),
//   videoButton = document.getElementById('video-button'),
//   videoIcon = document.getElementById('video-icon');

// function playPause() {
//   if (videoFile.paused) {
//     // Play video
//     videoFile.play();
//     // We change the icon
//     videoIcon.classList.add('ri-pause-line');
//     videoIcon.classList.remove('ri-play-line');
//   } else {
//     // Pause video
//     videoFile.pause();
//     // We change the icon
//     videoIcon.classList.remove('ri-pause-line');
//     videoIcon.classList.add('ri-play-line');
//   }
// }
// videoButton.addEventListener('click', playPause);

// function finalVideo() {
//   // Video ends, icon change
//   videoIcon.classList.remove('ri-pause-line');
//   videoIcon.classList.add('ri-play-line');
// }
// // ended, when the video ends
// videoFile.addEventListener('ended', finalVideo);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .healt__content,
           .footer__data, .footer__rights, .event_date`,
  {
    origin: 'top',
    interval: 100,
  }
);

sr.reveal(
  `.akad, .ceremony, .addres`,

  {
    origin: 'bottom',
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
           .video__description, .detail_cwe`,

  {
    origin: 'left',
    interval: 100,
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content, .detail_cwo`,
  {
    origin: 'right',
    interval: 100,
  }
);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line');

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== COUNTER TIME ====================*/
// Set the date we're counting down to
var countDownDate = new Date('Mar 26, 2022 15:37:25').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('demo-counter').innerHTML = days + '  Days ' + hours + '  hours ' + minutes + '  m ' + seconds + '  s';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

/*==================== WHEATER ====================*/
!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, 'script', 'weatherwidget-io-js');

function play() {
  var audio = document.getElementById('audio');
  audio.play();
  console.log('playyy audiooooo');
}

window.onload = function () {
  play();
};

const myAudio = document.getElementById('audio');
const btn = document.getElementById('btn-playback');
const btnIcon = document.querySelector('#btn-playback > i');
const btnText = document.getElementById('btn-text');

const toggleMusic = () => {
  const dataPlay = btn.getAttribute('data-play');

  if (dataPlay === 'false') {
    btn.setAttribute('data-play', 'true');
    myAudio.play();
    btnIcon.classList.remove('fa-music');
    btnIcon.classList.add('fa-pause-circle');
    // btnText.innerText = 'PAUSE';
  } else {
    btn.setAttribute('data-play', 'false');
    myAudio.pause();
    btnIcon.classList.remove('fa-pause-circle');
    btnIcon.classList.add('fa-music');
    // btnText.innerText = 'PLAY';
  }
};

// ===================== MODAL POP UP =====================
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.container-popup');
const close = document.querySelector('.button_main');

window.onload = function () {
  setTimeout(function () {
    popup.style.display = 'block';

    // Add some time dellay to show pop up (semakin besar angka delay semakin lama munculnya )
  }, 0);
  // function noscroll() {
  //   window.scrollTo(0, 0);
  // }

  // window.addEventListener('scroll', noscroll);
};

close.addEventListener('click', () => {
  popup.style.display = 'none';
  popupContainer.style.display = 'none';

  const dataPlay = btn.getAttribute('data-play');

  if (dataPlay === 'false') {
    btn.setAttribute('data-play', 'true');
    myAudio.play();
    btnIcon.classList.remove('fa-music');
    btnIcon.classList.add('fa-pause-circle');
    // btnText.innerText = 'PAUSE';
  } else {
    btn.setAttribute('data-play', 'false');
    myAudio.pause();
    btnIcon.classList.remove('fa-pause-circle');
    btnIcon.classList.add('fa-music');
    // btnText.innerText = 'PLAY';
  }
});
