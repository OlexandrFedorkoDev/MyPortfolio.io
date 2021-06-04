const init = () => {

  window.onload = function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-hidden');
    }, 3000);

    setTimeout(() => {
      startAnimation();
      preloader.classList.add('preloader-none');
    }, 3200);
  };

  const showNextSlide = () => {
    bgSlides('down');
    imagesSlides('down');
    shapesSlides('down');
    textSlides('down');
  };

  const showPrevSlide = () => {
    bgSlides('up');
    imagesSlides('up');
    shapesSlides('up');
    textSlides('up');
  };

  if (window.innerWidth >= 768) {
    window.addEventListener('wheel', (e) => {

      let delta = -e.deltaY;

      if (delta > 0) {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      } else {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }
    });
  } else {
    document.addEventListener('swiped-left', () => {
      showNextSlide();
    });

    document.addEventListener('swiped-right', () => {
      showPrevSlide();
    });
  }
};



init();
let menuBtn = document.querySelector('.header__burger')
menuBtn.addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('menu--active')
  // document.body.classList.toggle('blur')
  document.querySelector('.burger').classList.toggle('burger--active')
  // document.querySelector('.contact__list').classList.toggle('contact__list--active')

})

