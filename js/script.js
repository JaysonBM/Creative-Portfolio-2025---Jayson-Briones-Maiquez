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
    const gallery = document.querySelector('#gallery')

    const unityWrapper = document.querySelector('.unity-wrapper');
    const bespokenWrapper = document.querySelector('.bespoken-wrapper');
    const kingdomWrapper = document.querySelector('.kingdom-wrapper');
    const momoWrapper = document.querySelector('.momo-wrapper');
    const signageWrapper = document.querySelector('.signage-wrapper');

    const hide = document.querySelector('.hide');
    const hide1 = document.querySelector('.hide1');
    const hide2 = document.querySelector('.hide2');
    const hide3 = document.querySelector('.hide3');
    const hide4 = document.querySelector('.hide4');

    const unitydiv = unityWrapper.querySelector('picture');
    const unityh2 = unityWrapper.querySelector('h2');
    const unityh3 = unityWrapper.querySelector('h3');
    const unityp = unityWrapper.querySelector('p');
    const unityimg = document.querySelector('.unityimg1');
    const unityimg2 = document.querySelector('.unityimg2');
    const unityimg3 = document.querySelector('.unityimg3');
    const unityimg4 = document.querySelector('.unityimg4');
    
    
    

    unityWrapper.addEventListener('mouseenter', function () {

        unityWrapper.style.opacity = '0';
        setTimeout(function () {
            unitydiv.style.display = 'none';
            unityh2.style.display = 'block';
            unityh3.style.display = 'block';
            unityp.style.display = 'block';

            unityWrapper.style.opacity = '1';
        }, 200);

        bespokenWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg.style.display = 'block';
            hide1.style.display = 'none';

            bespokenWrapper.style.opacity = '1';
        }, 200);

        kingdomWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg2.style.display = 'block';
            hide2.style.display = 'none';

            kingdomWrapper.style.opacity = '1';
        }, 200);

        momoWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg3.style.display = 'block';
            hide3.style.display = 'none';

            momoWrapper.style.opacity = '1';
        }, 200);

        signageWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg4.style.display = 'block';
            hide4.style.display = 'none';

            signageWrapper.style.opacity = '1';
        }, 200);
    });
    
    unityWrapper.addEventListener('mouseleave', function () {
        
        unityWrapper.style.opacity = '0';
        setTimeout(function () {
            unitydiv.style.display = 'block';
            unityh2.style.display = 'none';
            unityh3.style.display = 'none';
            unityp.style.display = 'none';

            unityWrapper.style.opacity = '1';
        }, 100);

        bespokenWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg.style.display = 'none';
            hide1.style.display = 'block';
            
            bespokenWrapper.style.opacity = '1';
        }, 100);

        kingdomWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg2.style.display = 'none';
            hide2.style.display = 'block';

            kingdomWrapper.style.opacity = '1';
        }, 100);

        momoWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg3.style.display = 'none';
            hide3.style.display = 'block';

            momoWrapper.style.opacity = '1';
        }, 100);

        signageWrapper.style.opacity = '0';
        setTimeout(function () {
            unityimg4.style.display = 'none';
            hide4.style.display = 'block';

            signageWrapper.style.opacity = '1';
        }, 100);

    });

    const bespokendiv = bespokenWrapper.querySelector('picture');
    const bespokenh2 = bespokenWrapper.querySelector('h2');
    const bespokenh3 = bespokenWrapper.querySelector('h3');
    const bespokenp = bespokenWrapper.querySelector('p');
    const bespokenimg = document.querySelector('.bespokenimg1');
    const bespokenimg2 = document.querySelector('.bespokenimg2');
    const bespokenimg3 = document.querySelector('.bespokenimg3');
    const bespokenimg4 = document.querySelector('.bespokenimg4');

    bespokenWrapper.addEventListener('mouseenter', function () {

        unityWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg.style.display = 'block';
            hide.style.display = 'none';

            unityWrapper.style.opacity = '1';
        }, 200);

        bespokenWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokendiv.style.display = 'none';
            bespokenh2.style.display = 'block';
            bespokenh3.style.display = 'block';
            bespokenp.style.display = 'block';

            bespokenWrapper.style.opacity = '1';
        }, 200);

        kingdomWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg2.style.display = 'block';
            hide2.style.display = 'none';

            kingdomWrapper.style.opacity = '1';
        }, 200);

        momoWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg3.style.display = 'block';
            hide3.style.display = 'none';

            momoWrapper.style.opacity = '1';
        }, 200);

        signageWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg4.style.display = 'block';
            hide4.style.display = 'none';

            signageWrapper.style.opacity = '1';
        }, 200);
    });
    
    bespokenWrapper.addEventListener('mouseleave', function () {
        
        unityWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg.style.display = 'none';
            hide.style.display = 'block';

            unityWrapper.style.opacity = '1';
        }, 100);

        bespokenWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokendiv.style.display = 'block';
            bespokenh2.style.display = 'none';
            bespokenh3.style.display = 'none';
            bespokenp.style.display = 'none';
            
            bespokenWrapper.style.opacity = '1';
        }, 100);

        kingdomWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg2.style.display = 'none';
            hide2.style.display = 'block';

            kingdomWrapper.style.opacity = '1';
        }, 100);

        momoWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg3.style.display = 'none';
            hide3.style.display = 'block';

            momoWrapper.style.opacity = '1';
        }, 100);

        signageWrapper.style.opacity = '0';
        setTimeout(function () {
            bespokenimg4.style.display = 'none';
            hide4.style.display = 'block';

            signageWrapper.style.opacity = '1';
        }, 100);

    });
});







// document.addEventListener("DOMContentLoaded", function () {
//     const unityWrapper = document.querySelector('.unity-wrapper');
//     const bespokenWrapper = document.querySelector('.bespoken-wrapper');
//     const kingdomWrapper = document.querySelector('.kingdom-wrapper');
//     const momoWrapper = document.querySelector('.momo-wrapper');
//     const signageWrapper = document.querySelector('.signage-wrapper');

//     const unitydiv = unityWrapper.querySelector('picture');
//     const unityh2 = unityWrapper.querySelector('h2');
//     const unityh3 = unityWrapper.querySelector('h3');
//     const unityp = unityWrapper.querySelector('p');
//     const unityimg = document.querySelector('.unityimg1');
//     const unityimg2 = document.querySelector('.unityimg2');
//     const unityimg3 = document.querySelector('.unityimg3');
//     const unityimg4 = document.querySelector('.unityimg4');
    
    
    

//     unityWrapper.addEventListener('mouseenter', function () {

//         unityWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unitydiv.style.display = 'none';
//             unityh2.style.display = 'block';
//             unityh3.style.display = 'block';
//             unityp.style.display = 'block';

//             unityWrapper.style.opacity = '1';
//         }, 500);
//     });
    
//     unityWrapper.addEventListener('mouseleave', function () {
        
//         unityWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unitydiv.style.display = 'block';
//             unityh2.style.display = 'none';
//             unityh3.style.display = 'none';
//             unityp.style.display = 'none';

//             unityWrapper.style.opacity = '1';
//         }, 500);
//     });
// });









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

