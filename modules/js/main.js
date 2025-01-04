
// Header Functionality
const header = document.querySelector('.header-sec');
header.classList.add('transparent');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        
        header.classList.add('show');
        header.classList.remove('hide');
    }

   
    if (currentScrollY === 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }

    lastScrollY = currentScrollY; 
});








function toggleMenu() {
    const nav = document.getElementById('fullscreenNav');
    nav.classList.toggle('active');
}

// Toggle Submenu for "Services"
function toggleSubmenu(event) {
    event.preventDefault();
    const parentLi = event.target.closest('li');
    const submenu = parentLi.querySelector('.submenu');
    
    if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

      
        const submenuItems = submenu.querySelectorAll('li');
        submenuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
}

// Function to close the fullscreen nav
function closeNav() {
    const nav = document.getElementById('fullscreenNav');
    nav.classList.remove('active');

    const links = document.querySelectorAll('.nav-links li');
    links.forEach(link => {
        link.classList.remove('show-link');
    });
}

// Function to toggle the left sidebar
function toggleLeftBar() {
    const leftBar = document.querySelector('.left-bar-sec');
    leftBar.classList.toggle('active');
}


function closeLeftBar() {
    const leftBar = document.querySelector('.left-bar-sec');
    leftBar.classList.remove('active');
}

// Create an intersection observer to watch for the element entering the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          
            entry.target.classList.add('fade-in-visible');
            
          
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});


const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
    observer.observe(element);
});



const arrowUpBtn = document.getElementById('arrow-up-btn');
const socialIcons = document.getElementById('social-icons');
let isIconsVisible = false;

arrowUpBtn.addEventListener('click', function () {
  if (isIconsVisible) {
  
    socialIcons.classList.remove('visible');
    socialIcons.classList.add('hidden');
   
    setTimeout(() => {
      arrowUpBtn.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
    }, 300); 
    isIconsVisible = false;
  } else {
   
    socialIcons.classList.remove('hidden');
    socialIcons.classList.add('visible');

    arrowUpBtn.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
    isIconsVisible = true;
  }
});

// Active links

document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href.split(/[?#]/)[0]; 
    const submenuLinks = document.querySelectorAll('.submenu a');
    const servicesLink = document.querySelector('.has-submenu > a');

    submenuLinks.forEach(link => {
        const linkHref = link.href.split(/[?#]/)[0];
        console.log('Current URL:', currentUrl, 'Link Href:', linkHref); 
        if (linkHref === currentUrl) {
            console.log('Match found!');
            servicesLink.classList.add('submenu-active');
        }
    });
});






