document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById('photography-container');
    const imageFolder = 'photos/';
    const imageFilenames = [
        'Steph_PS-Edit-(5).jpg',
        'Steph_PS-Edit-(7).jpg',
        'Cassie_PS-Edit-(1).jpg',
        'Cassie_PS-Edit-(4).jpg',
        'Cassie_PS-Edit-(2).jpg',
        'Cassie_PS-Edit-(5).jpg',
        'EV_PS-RAW-(1).jpg',
        'Steph_PS-Edit-(3).jpg',
        'Steph_PS-Edit-(2).jpg',
        'Steph_PS-Edit-(4).jpg',
        'Cassie_PS-Edit-(3).jpg',
        'Cassie_PS-Edit-(6).jpg',
        'Cassie_PS-Edit-(7).jpg',
        'PS-RAW.jpg',
        'PS-Edit.jpg',
        'Steph_PS-Edit-(6).jpg',
        'Steph_PS-Edit.jpg',
        'Pisam_PS-Edit-(1).jpg',
        'Pisam_PS-Edit-(2).jpg',
        'Pisam_PS-Edit-(3).jpg',
        'Pisam_PS-Edit-(4).jpg',
        'Pisam_PS-Edit-(5).jpg',
        'Pisam_PS-RAW.jpg',
        'PS-Edit-(2).jpg',
        'PS-Edit-(3).jpg',
        'RAW.jpg',
        'RAW-(2).jpg'
        ];

    imageFilenames.forEach(filename => {
        const img = document.createElement('img');
        img.src = imageFolder + filename;
        img.alt = filename;
        img.classList.add('thumbnail');
        img.addEventListener('click', () => openFullscreen(img));
        imageContainer.appendChild(img);
    });

    // Create fullscreen overlay
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.classList.add('fullscreen-overlay');
    fullscreenOverlay.addEventListener('click', closeFullscreen);
    document.body.appendChild(fullscreenOverlay);

    const fullscreenImage = document.createElement('img');
    fullscreenImage.loading = 'lazy'; // Add lazy loading attribute to fullscreen image
    fullscreenOverlay.appendChild(fullscreenImage);

    function openFullscreen(img) {
        fullscreenImage.src = img.src;
        fullscreenOverlay.style.display = 'flex';
    }

    function closeFullscreen() {
        fullscreenOverlay.style.display = 'none';
    }
});

function toggleMenu() {
    $('nav').toggleClass("navexpanded");
}

// Event listener for menu icon click
$('#menu-icon').click(function (e) {
    toggleMenu();
    e.preventDefault(); // Prevent default behavior of the link
});

// Event listener for close icon click
$('#close-icon').click(function (e) {
    toggleMenu();
    e.preventDefault(); // Prevent default behavior of the link
});

// Event listener for menu item click
$('#click-function a').click(function (e) {
    toggleMenu(); // Close the menu
});