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
    const imageWrappers = document.querySelectorAll(".image-wrapper"); // All image-wrapper divs
    const descriptions = document.querySelectorAll(".gallery-description > div"); // All description divs
    let activeDescription = document.querySelector(".default-description"); // Start with the default description as active

    // Function to hide all descriptions
    function hideAllDescriptions() {
        descriptions.forEach(desc => {
            desc.style.opacity = "0"; // Fade out
            setTimeout(() => {
                // desc.style.display = "none"; // Fully hide after fade-out
            }, 500); // Match the CSS transition duration
        });
    }

    // Function to show a specific description
    function showDescription(description) {
        if (activeDescription === description) return; // Skip if the description is already active

        // Fade out the currently active description
        if (activeDescription) {
            activeDescription.style.opacity = "0";
            setTimeout(() => {
                // activeDescription.style.display = "none";
            }, 500); // Match fade-out duration
        }

        // Show the new description
        description.style.display = "block"; // Make it block-level
        setTimeout(() => {
            description.style.opacity = "1"; // Fade in
        }, 50); // Small delay for smoother transition

        // Update the active description
        activeDescription = description;
    }

    // Hover over image wrappers to show corresponding description
    imageWrappers.forEach(wrapper => {
        wrapper.addEventListener("mouseenter", function () {
            // Use the data-target attribute to find the corresponding description
            const targetDescriptionSelector = `.${wrapper.dataset.target}`;
            const targetDescription = document.querySelector(targetDescriptionSelector);

            if (targetDescription) {
                showDescription(targetDescription); // Show the corresponding description
            }
        });
    });

    // Initial setup: Ensure only the default description is visible
    hideAllDescriptions();
    activeDescription.style.display = "block";
    activeDescription.style.opacity = "1";
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hover-effect img').forEach(img => {
        img.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from propagating to the document

            // Remove active and inactive classes from all images
            document.querySelectorAll('.hover-effect img').forEach(el => {
                el.classList.remove('active');
                el.classList.add('inactive');
            });

            // Add active class to the clicked image and remove inactive class
            img.classList.add('active');
            img.classList.remove('inactive');

            // Change the background image of the .skills-display
            const bgImage = img.getAttribute('data-bg');
            document.querySelector('.skills-display').style.backgroundImage = `url(${bgImage})`;

            // Change the height of the .skills-bar
            const barHeight = img.getAttribute('data-height');
            document.querySelector('.skills-bar').style.height = barHeight;
        });
    });

    // Add an event listener to the document to detect clicks outside the .hover-effect div
    document.addEventListener('click', (event) => {
        const hoverEffectDiv = document.querySelector('.hover-effect');
        if (!hoverEffectDiv.contains(event.target)) {
            // Remove active and inactive classes from all images
            document.querySelectorAll('.hover-effect img').forEach(el => {
                el.classList.remove('active');
                el.classList.remove('inactive');
            });

            // Reset the background image of the .skills-display
            document.querySelector('.skills-display').style.backgroundImage = '';

            // Reset the height of the .skills-bar
            document.querySelector('.skills-bar').style.height = '0%';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const konamiCode = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
        "KeyB", "KeyA"
    ];
    let konamiIndex = 0;

    document.addEventListener("keydown", function (event) {
        if (event.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("Ahhh you found the code!! Good job xD");
                konamiIndex = 0; // Reset the index
            }
        } else {
            konamiIndex = 0; // Reset the index if the sequence is broken
        }
    });
});














// document.addEventListener("DOMContentLoaded", function () {
//     const gallery = document.querySelector('#gallery')

//     const unityWrapper = document.querySelector('.unity-wrapper');
//     const bespokenWrapper = document.querySelector('.bespoken-wrapper');
//     const kingdomWrapper = document.querySelector('.kingdom-wrapper');
//     const momoWrapper = document.querySelector('.momo-wrapper');
//     const signageWrapper = document.querySelector('.signage-wrapper');

//     const hide = document.querySelector('.hide');
//     const hide1 = document.querySelector('.hide1');
//     const hide2 = document.querySelector('.hide2');
//     const hide3 = document.querySelector('.hide3');
//     const hide4 = document.querySelector('.hide4');

//     const unitydiv = unityWrapper.querySelector('picture');
//     const unityh2 = unityWrapper.querySelector('h2');
//     const unityh3 = unityWrapper.querySelector('h3');
//     const unityp = unityWrapper.querySelector('p');
//     const unityimg = document.querySelector('.unityimg1');
//     const unityimg2 = document.querySelector('.unityimg2');
//     const unityimg3 = document.querySelector('.unityimg3');
//     const unityimg4 = document.querySelector('.unityimg4');

//     const defaultImg = document.querySelector('.default-img');

//     unityWrapper.addEventListener('mouseenter', function () {

//         unityWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unitydiv.style.display = 'none';
//             unityh2.style.display = 'block';
//             unityh3.style.display = 'block';
//             unityp.style.display = 'block';

//             unityWrapper.style.opacity = '1';
//         }, 500);

//         bespokenWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg.style.display = 'block';
//             hide1.style.display = 'none';

//             bespokenWrapper.style.opacity = '1';
//         }, 500);

//         kingdomWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg2.style.display = 'block';
//             hide2.style.display = 'none';

//             kingdomWrapper.style.opacity = '1';
//         }, 500);

//         momoWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg3.style.display = 'block';
//             hide3.style.display = 'none';

//             momoWrapper.style.opacity = '1';
//         }, 500);

//         signageWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg4.style.display = 'block';
//             hide4.style.display = 'none';

//             signageWrapper.style.opacity = '1';
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

//         bespokenWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg.style.display = 'none';
//             hide1.style.display = 'block';
            
//             bespokenWrapper.style.opacity = '1';
//         }, 500);

//         kingdomWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg2.style.display = 'none';
//             hide2.style.display = 'block';

//             kingdomWrapper.style.opacity = '1';
//         }, 500);

//         momoWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg3.style.display = 'none';
//             hide3.style.display = 'block';

//             momoWrapper.style.opacity = '1';
//         }, 500);

//         signageWrapper.style.opacity = '0';
//         setTimeout(function () {
//             unityimg4.style.display = 'none';
//             hide4.style.display = 'block';

//             signageWrapper.style.opacity = '1';
//         }, 500);

//     });

//     const bespokendiv = bespokenWrapper.querySelector('picture');
//     const bespokenh2 = bespokenWrapper.querySelector('h2');
//     const bespokenh3 = bespokenWrapper.querySelector('h3');
//     const bespokenp = bespokenWrapper.querySelector('p');
//     const bespokenimg = document.querySelector('.bespokenimg1');
//     const bespokenimg2 = document.querySelector('.bespokenimg2');
//     const bespokenimg3 = document.querySelector('.bespokenimg3');
//     const bespokenimg4 = document.querySelector('.bespokenimg4');

//     bespokenWrapper.addEventListener('mouseenter', function () {

//         unityWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg.style.display = 'block';
//             hide.style.display = 'none';

//             unityWrapper.style.opacity = '1';
//         }, 500);

//         bespokenWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokendiv.style.display = 'none';
//             bespokenh2.style.display = 'block';
//             bespokenh3.style.display = 'block';
//             bespokenp.style.display = 'block';

//             bespokenWrapper.style.opacity = '1';
//         }, 500);

//         kingdomWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg2.style.display = 'block';
//             hide2.style.display = 'none';

//             kingdomWrapper.style.opacity = '1';
//         }, 500);

//         momoWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg3.style.display = 'block';
//             hide3.style.display = 'none';

//             momoWrapper.style.opacity = '1';
//         }, 500);

//         signageWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg4.style.display = 'block';
//             hide4.style.display = 'none';

//             signageWrapper.style.opacity = '1';
//         }, 500);
//     });
    
//     bespokenWrapper.addEventListener('mouseleave', function () {
        
//         unityWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg.style.display = 'none';
//             hide.style.display = 'block';

//             unityWrapper.style.opacity = '1';
//         }, 500);

//         bespokenWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokendiv.style.display = 'block';
//             bespokenh2.style.display = 'none';
//             bespokenh3.style.display = 'none';
//             bespokenp.style.display = 'none';
            
//             bespokenWrapper.style.opacity = '1';
//         }, 500);

//         kingdomWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg2.style.display = 'none';
//             hide2.style.display = 'block';

//             kingdomWrapper.style.opacity = '1';
//         }, 500);

//         momoWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg3.style.display = 'none';
//             hide3.style.display = 'block';

//             momoWrapper.style.opacity = '1';
//         }, 500);

//         signageWrapper.style.opacity = '0';
//         setTimeout(function () {
//             bespokenimg4.style.display = 'none';
//             hide4.style.display = 'block';

//             signageWrapper.style.opacity = '1';
//         }, 500);

//     });
// });







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

