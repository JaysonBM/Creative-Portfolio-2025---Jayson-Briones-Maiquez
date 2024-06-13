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



document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.querySelector('.gallery');
    const imageWrapper = document.querySelector('.image-wrapper');

    const unityWrapper = document.querySelector('.unity-wrapper');
    const bespokenWrapper = document.querySelector('.bespoken-wrapper');
    const kingdomWrapper = document.querySelector('.kingdom-wrapper');
    const momoWrapper = document.querySelector('.momo-wrapper');
    const signageWrapper = document.querySelector('.signage-wrapper');



    const unitydiv = unityWrapper.querySelector('picture');
    const unityh2 = unityWrapper.querySelector('h2');
    const unityh3 = unityWrapper.querySelector('h3');
    const unityp = unityWrapper.querySelector('p');
    const unityimg = document.querySelector('.unityimg1');
    const unityimg2 = document.querySelector('.unityimg2');
    const unityimg3 = document.querySelector('.unityimg3');
    const unityimg4 = document.querySelector('.unityimg4');

    const defaultImg = document.querySelector('.default-img');

    unityWrapper.addEventListener('mouseenter', function () {

        unityWrapper.style.opacity = '0';
        setTimeout(function () {
            unitydiv.style.display = 'none';
            unityh2.style.display = 'block';
            unityh3.style.display = 'block';
            unityp.style.display = 'block';
            unityimg.style.display = 'block';
            unityimg2.style.display = 'block';
            unityimg3.style.display = 'block';
            unityimg4.style.display = 'block';
            defaultImg.style.display = 'none';
            
            unityWrapper.style.opacity = '1';
        }, 150);
    });
    
    unityWrapper.addEventListener('mouseleave', function () {
        
        unityWrapper.style.opacity = '0';
        setTimeout(function () {
            unitydiv.style.display = 'block';
            unityh2.style.display = 'none';
            unityh3.style.display = 'none';
            unityp.style.display = 'none';
            unityimg.style.display = 'none';
            unityimg2.style.display = 'none';
            unityimg3.style.display = 'none';
            unityimg4.style.display = 'none';
            defaultImg.style.display = 'block';

            unityWrapper.style.opacity = '1';
        }, 150);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const unityWrapper = document.querySelector('.unity-wrapper');
//     const bespokenWrapper = document.querySelector('.bespoken-wrapper');
//     const kingdomWrapper = document.querySelector('.kingdom-wrapper');
//     const momoWrapper = document.querySelector('.momo-wrapper');
//     const signageWrapper = document.querySelector('.signage-wrapper');

//     const unityimg = unityWrapper.querySelector('picture');
//     const unityh2 = unityWrapper.querySelector('h2');
//     const unityh3 = unityWrapper.querySelector('h3');
//     const unityp = unityWrapper.querySelector('p');
    
//     const unityOriginal = unityWrapper.innerHTML;
//     const bespokenOriginal = bespokenWrapper.innerHTML;
//     const kingdomOriginal = kingdomWrapper.innerHTML;
//     const momoOriginal = momoWrapper.innerHTML;
//     const signageOriginal = signageWrapper.innerHTML;

//     unityWrapper.addEventListener('mouseenter', function () {
//         bespokenWrapper.innerHTML = '<img src="images/unity-mockup3.jpg" alt="Description of the image">';
//         kingdomWrapper.innerHTML = '<img src="images/MacBook Air PSD Mockup.jpg" alt="Description of the image">';
//         momoWrapper.innerHTML = '<img src="images/unity-mockup.jpg" alt="Description of the image">';
//         signageWrapper.innerHTML = '<img src="images/unity-mockup2.jpg" alt="Description of the image">';

//         unityWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg.style.display = 'none';
//             unityh2.style.display = 'block';
//             unityh3.style.display = 'block';
//             unityp.style.display = 'block';
//             unityWrapper.style.opacity = '1';
//         }, 1000);
//     });
    
//     unityWrapper.addEventListener('mouseleave', function () {
//         setTimeout(function () {
//         bespokenWrapper.innerHTML = bespokenOriginal;
//         kingdomWrapper.innerHTML = kingdomOriginal;
//         momoWrapper.innerHTML = momoOriginal;
//         signageWrapper.innerHTML = signageOriginal;

//         unityWrapper.style.opacity = '0';
        
//             unityimg.style.display = 'block';
//             unityh2.style.display = 'none';
//             unityh3.style.display = 'none';
//             unityp.style.display = 'none';
//             unityWrapper.style.opacity = '1';
//         }, 1000);
//     });
// });

