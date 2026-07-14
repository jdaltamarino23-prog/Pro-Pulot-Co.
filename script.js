// =========================================
// PRO PULOT CO.
// Premium Website Script
// =========================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Reveal animation
const reveals = document.querySelectorAll("section");

function revealOnScroll(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";
        }

    });

}

reveals.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// Active navigation

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});

// Footer Year

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
