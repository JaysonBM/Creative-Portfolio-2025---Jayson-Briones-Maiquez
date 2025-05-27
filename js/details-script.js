document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("picture").forEach(picture => {
        const mainImg = picture.querySelector(".main-img");
        const thumbs = picture.querySelectorAll(".details-thumb");
        thumbs.forEach(thumb => {
            thumb.addEventListener("click", function () {
                if (mainImg.src === thumb.src) return; // Do nothing if already showing
                mainImg.classList.add("fading");
                setTimeout(() => {
                    mainImg.src = thumb.src;
                    mainImg.onload = () => {
                        mainImg.classList.remove("fading");
                    };
                }, 100); // Match the CSS transition duration
            });
        });
    });
});