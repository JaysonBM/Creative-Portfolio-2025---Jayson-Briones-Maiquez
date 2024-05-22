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

document.addEventListener('DOMContentLoaded', (event) => {
    const galleryDiv = document.getElementById('gallery');
    const childDivs = galleryDiv.querySelectorAll('.image-wrapper');

    childDivs.forEach((div, index) => {
        div.addEventListener('mouseover', () => {
            childDivs.forEach((otherDiv, otherIndex) => {
                if (index !== otherIndex) {
                    otherDiv.style.backgroundColor = 'lightcoral';
                }
            });
        });

        div.addEventListener('mouseout', () => {
            childDivs.forEach((otherDiv, otherIndex) => {
                if (index !== otherIndex) {
                    otherDiv.style.backgroundColor = 'lightblue';
                }
            });
        });
    });
});