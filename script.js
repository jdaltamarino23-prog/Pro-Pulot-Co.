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
/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();

        lightbox.classList.add("active");

    });

});

function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});
/* ==========================
   TRANSPARENT NAVBAR
========================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
/* ==========================
   LEADERSHIP PROFILE
========================== */

const leaders = {

    leigh:{
        name:"Leigh Pacilan",
        position:"Captain",
        image:"images/officers/leigh.jpg",
        bio:"Provides strategic leadership, oversees club operations, and promotes the vision and values of Pro Pulot Co."
    },

    irik:{
        name:"Irik Patria",
        position:"Co-Captain",
        image:"images/officers/irik.jpg",
        bio:"Supports the Captain and coordinates club activities while ensuring smooth operations."
    },

    froii:{
        name:"Froii Katipunan",
        position:"Treasurer",
        image:"images/officers/froii.jpg",
        bio:"Manages the club's finances, budgeting, and membership dues with transparency and accountability."
    },

    jessan:{
        name:"Jessan Marie Gravador",
        position:"Scheduler",
        image:"images/officers/jessan.jpg",
        bio:"Organizes club schedules, practices, tournaments, and special events."
    },

    aziel:{
        name:"Aziel JD Altamarino",
        position:"Systems & Software Engineer",
        image:"images/officers/aziel.jpg",
        bio:"Develops and maintains the Pro Pulot Co. website, digital platforms, and technology solutions."
    },

    sheena:{
        name:"Sheena Adlao",
        position:"Equipment Manager",
        image:"images/officers/sheena.jpg",
        bio:"Maintains club equipment and ensures all matches and events are properly supplied."
    },

    justice:{
        name:"Justice Villanueva",
        position:"New Member Onboarding",
        image:"images/officers/justice.jpg",
        bio:"Welcomes new members and helps them integrate into the Pro Pulot Co. community."
    },

    roch:{
        name:"Roch Laquinon",
        position:"New Member Onboarding",
        image:"images/officers/roch.jpg",
        bio:"Supports new members through activities and encourages participation."
    },

    rovelyn:{
        name:"Rovelyn Amil",
        position:"New Member Onboarding",
        image:"images/officers/rovelyn.jpg",
        bio:"Creates a welcoming and friendly environment for every new member."
    },

    derence:{
        name:"Derence Gadiana",
        position:"Dink Master 1",
        image:"images/officers/derence.png",
        bio:"Assist new members learn basic techniques to enhance skills and expertise."
    },
    
    philip:{
        name:"Philip Clavecillas",
        position:"Dink Master 2",
        image:"images/officers/philip.png",
        bio:"Support in assisting new members learn their basic skills and acquaint with the community."
        
};

const leaderModal = document.getElementById("leader-modal");

document.querySelectorAll(".leader-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        const leader = leaders[this.dataset.leader];

        document.getElementById("leader-photo").src = leader.image;
        document.getElementById("leader-name").textContent = leader.name;
        document.getElementById("leader-position").textContent = leader.position;
        document.getElementById("leader-bio").textContent = leader.bio;

        leaderModal.classList.add("active");

    });

});

document.querySelector(".leader-close").onclick=function(){

    leaderModal.classList.remove("active");

}

leaderModal.onclick=function(e){

    if(e.target===leaderModal){

        leaderModal.classList.remove("active");

    }

}
