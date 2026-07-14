// ========================================
// PRO PULOT CO.
// Premium Members Carousel
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(".carousel");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!carousel) return;

    const card = carousel.querySelector(".member-card");
    if (!card) return;

    const gap = 25;
    const cardWidth = card.offsetWidth + gap;

    let autoSlide;

    function nextSlide() {

        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });

        if (
            carousel.scrollLeft + carousel.clientWidth >=
            carousel.scrollWidth - 5
        ) {

            setTimeout(() => {

                carousel.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });

            }, 500);

        }

    }

    function prevSlide() {

        carousel.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });

    }

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    function startCarousel() {

        autoSlide = setInterval(nextSlide, 4000);

    }

    function stopCarousel() {

        clearInterval(autoSlide);

    }

    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    startCarousel();

});
