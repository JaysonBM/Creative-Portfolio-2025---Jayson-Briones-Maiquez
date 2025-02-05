document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById('photography-container');
    const imageFolder = 'photos/';
    const imageFilenames = [
        'Steph_PS-Edit (9).webp',
        'Steph_PS-Edit (5).webp',
        'Steph_PS-Edit (1).webp',
        'Steph_PS-Edit (7).webp',
        'Cassie_PS-Edit (1).webp',
        'Cassie_PS-Edit (4).webp',
        'Cassie_PS-Edit (2).webp',
        'Cassie_PS-Edit (5).webp',
        'EV_PS-RAW (1).webp',
        'EV_PS-RAW (2).webp',
        'Steph_PS-Edit (8).webp',
        'Steph_PS-Edit (3).webp',
        'Steph_PS-Edit (2).webp',
        'Steph_PS-Edit (4).webp',
        'Cassie_PS-Edit (3).webp',
        'Cassie_PS-Edit (6).webp',
        'Cassie_PS-Edit (7).webp',
        'Cassie_PS-Edit (8).webp',
        'PS-RAW.webp',
        'PS-Edit.webp',
        'Steph_PS-Edit (6).webp',
        'Steph_PS-Edit.webp',
        'Pisam_PS-Edit.webp',
        'Pisam_PS-Edit (1).webp',
        'Pisam_PS-Edit (2).webp',
        'Pisam_PS-Edit (3).webp',
        'Pisam_PS-Edit (4).webp',
        'Pisam_PS-Edit (5).webp',
        'Pisam_PS-RAW.webp',
        'PS-Edit (2) (1).webp',
        'PS-Edit (3).webp',
        'RAW.webp',
        'RAW (2).webp',
        'RAW (3).webp'
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