

// Function to ensure all images are loaded
function imagesLoaded() {
    var images = $('img');
    var totalImages = images.length;
    var loadedImages = 0;

   
    images.on('load', function () {
        loadedImages++;
        
     
        if (loadedImages === totalImages) {
            $('.gallery-sec').css({
                'visibility': 'visible',
                'opacity': '1'
            });
            filterGallery(category);
            setActiveCategoryButton(category); 
        }
    });
}




function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


const category = getQueryParameter('category');

// Function to filter gallery images based on category
function filterGallery(category) {
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry', 
        masonry: {
            columnWidth: '.grid-item', 
            gutter: 15
        },
        transitionDuration: '0.8s',
    });

   
    if (!category) {
        $grid.isotope({ filter: '*' });
    } else {
        
        $grid.isotope({ filter: `.${category}` }); 
    }
}

// Function to set active category button
function setActiveCategoryButton(category) {
   
    $('.filters button').removeClass('active');
    
   
    if (category) {
        $(`.filters button[data-filter=".${category}"]`).addClass('active');
    } else {
       
        $('.filters button[data-filter="*"]').addClass('active');
    }
}


window.onload = function() {
    filterGallery(category);
    setActiveCategoryButton(category);
};

$(document).ready(function () {

    
    imagesLoaded();

    
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry', 
        masonry: {
            columnWidth: '.grid-item',
            gutter: 15  
        },
        transitionDuration: '0.8s',
    });

    
    $('.filters button[data-filter="*"]').addClass('active');

   
    $('.filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

   
        $('.filters button').removeClass('active');
        $(this).addClass('active');
    });
});
