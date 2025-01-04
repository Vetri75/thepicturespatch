// Function to ensure all images are loaded and the gallery appears
function initializeGallery(category) {
    // Hide the gallery initially
    $('.grid').css({ 'visibility': 'hidden', 'opacity': '0' });

    // Use imagesLoaded library to wait until all images are loaded
    $('.grid').imagesLoaded(function () {
        // Initialize Isotope after all images are loaded
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-item',
                gutter: 15
            },
            transitionDuration: '0.8s',
        });

        // Filter the gallery based on the initial category
        if (!category) {
            $grid.isotope({ filter: '*' });
        } else {
            $grid.isotope({ filter: `.${category}` });
        }

        // Fade in the gallery once everything is ready
        $('.grid').css({ 'visibility': 'visible', 'opacity': '1' });

        // Set the active category button
        setActiveCategoryButton(category);
    });
}

// Function to get query parameter
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
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

// Initialize the gallery after the DOM is ready
$(document).ready(function () {
    const category = getQueryParameter('category');
    initializeGallery(category);

    // Add click event to filter buttons
    $('.filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });

        // Update the active button state
        $('.filters button').removeClass('active');
        $(this).addClass('active');
    });
});
