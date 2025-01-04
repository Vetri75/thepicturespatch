// ABOUT PAGE: Observer for slide-in animations
const aboutPageSlideInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible'); 
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1
});


const leftElement = document.querySelector('.abt-first-c');
const rightElement = document.querySelector('.abt-sec-c');

// Add animations only if elements are present
if (leftElement && rightElement) {
    leftElement.classList.add('slide-in-left'); 
    rightElement.classList.add('slide-in-right');

    aboutPageSlideInObserver.observe(leftElement);
    aboutPageSlideInObserver.observe(rightElement);
}


const aboutSwiperContainer = document.querySelector('.abt-swiper');

// Create the Intersection Observer
const aboutSwiperObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     
      entry.target.classList.add('visible');

     
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});


aboutSwiperObserver.observe(aboutSwiperContainer);


