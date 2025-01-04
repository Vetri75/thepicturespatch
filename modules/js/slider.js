document.addEventListener("DOMContentLoaded", function () {
    const words = ['relationship.', 'client satisfaction.', 'timely delivery.', 'quality.', '24/7 Services.'];
    let currentWordIndex = 0; 
    let charIndex = 0; 
    let typingTimeout; 

    // Typing Effect Function
    function typeEffect(element) {
        const currentWord = words[currentWordIndex];

  
        if (charIndex <= currentWord.length) {
            element.innerHTML =
                currentWord.slice(0, charIndex) + `<span class="cursor">|</span>`;
            charIndex++;
            typingTimeout = setTimeout(() => typeEffect(element), 200); 
        } else {
           
            setTimeout(() => {
                charIndex = 0; 
                currentWordIndex = (currentWordIndex + 1) % words.length; 
                typeEffect(element); 
            }, 1000); 
        }
    }

  
    function resetTypingEffect(element) {
        clearTimeout(typingTimeout);
        charIndex = 0;
        element.innerHTML = ''; 
        typeEffect(element);
    }

   
    const swiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                const typingSection = document.querySelector('.typing-section');
                const dynamicText = document.querySelector('.dynamic-text');

             
                typingSection.classList.add('hide');
                resetTypingEffect(dynamicText); 

                
                setTimeout(() => {
                    typingSection.classList.remove('hide');
                    typingSection.classList.add('show');
                }, 1000);
            },
        },
    });

   
    const dynamicText = document.querySelector('.dynamic-text');
    typeEffect(dynamicText);
});









gsap.from(".hero-swiper .swiper-slide img", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".swiper-slide",
        start: "top center",
        end: "bottom top",
        scrub: true,
    }
});

// Image diveder Slider in index page
const swiper = new Swiper('.imageSlider', {
    slidesPerView: 1, 
    spaceBetween: 0, 
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

// Index page about content Slider
var newSwiper = new Swiper('.content-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    speed: 1200,
    effect: 'slide',
    navigation: {
        nextEl: '.content-swiper-button-next',
        prevEl: '.content-swiper-button-prev',
    },
    pagination: {
        el: '.content-swiper-pagination', 
        clickable: true,
        type: 'bullets',
    },
});


// Gallery page link Slider in index Page
const imageSwiper = new Swiper('.image-swiper', {
    loop: true,
    spaceBetween: 0, 
    navigation: {
        nextEl: '.image-swiper-button-next', 
        prevEl: '.image-swiper-button-prev', 
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
    },
});


// Logo Slider
const logoSwiper = new Swiper('.logo-swiper', {
    loop: true, 
    spaceBetween: 20,
    slidesPerView: 5, 
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    freeMode: true,
    freeModeMomentum: false,
});




// Client Review Slider
const swiperContainer = document.querySelector('.about-swiper');
if (swiperContainer) {
  const aboutSwiper = new Swiper('.about-swiper', {
      loop: true,
      spaceBetween: 0,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.about-swiper-pagination',
          clickable: true,
      },
  });
}
  
  


