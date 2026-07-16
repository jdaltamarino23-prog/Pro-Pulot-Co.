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
let currentLeader = "";

const leaderOrder = [

    "leigh",

    "irik",

    "froii",

    "jessan",

    "aziel",

    "sheena",

    "derence",

    "philip",

    "justice",

    "roch",

    "rovelyn"

];

const leaders = {

    leigh:{
    name:"Leigh Pacilan",
    position:"Captain",
    image:"images/officers/Leigh.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Captain of Pro Pulot Co., providing strategic leadership while promoting sportsmanship, teamwork, and organizational excellence throughout the community.",

    responsibilities:[
        "Provide strategic leadership",
        "Oversee club operations",
        "Guide organizational planning",
        "Represent Pro Pulot Co."
    ]
},

    irik:{
    name:"Irik Patria",
    position:"Co-Captain",
    image:"images/officers/Irik.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Co-Captain of Pro Pulot Co., supporting the Captain in leading the organization while coordinating club activities, strengthening teamwork, and ensuring smooth day-to-day operations.",

    responsibilities:[
        "Support the Captain in club leadership",
        "Coordinate team activities and events",
        "Promote teamwork and sportsmanship",
        "Assist in organizational planning"
    ]
},

  froii:{
    name:"Froii Katipunan",
    position:"Treasurer",
    image:"images/officers/Froii.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Treasurer of Pro Pulot Co., overseeing the organization's financial resources while ensuring transparency, accountability, and responsible budget management.",

    responsibilities:[
        "Manage club finances and records",
        "Monitor membership dues",
        "Prepare financial reports",
        "Support budget planning"
    ]
},

    jessan:{
    name:"Jessan Marie Gravador",
    position:"Scheduler",
    image:"images/officers/Jessan.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Scheduler of Pro Pulot Co., coordinating club activities, tournaments, practices, and ensuring members stay informed of upcoming events.",

    responsibilities:[
        "Organize club schedules",
        "Coordinate tournaments and practices",
        "Maintain the activity calendar",
        "Communicate event schedules"
    ]
},

  aziel:{
    name:"Aziel JD Altamarino",
    position:"Software & Social Media Engineer",
    image:"images/officers/aziel.jpg",

    tenure:"2nd Gen Member • Since 2026",

    bio:"Serves as the Systems & Software Engineer of Pro Pulot Co., leading the development, maintenance, and continuous improvement of the organization's official website and digital platforms. As the developer of the official Pro Pulot Co. website, he drives the club's digital initiatives to strengthen communication, streamline operations, and provide members with a modern and engaging online experience.",

    responsibilities:[
        "Design, develop, and maintain the official Pro Pulot Co. website",
        "Manage the organization's digital systems and technology solutions",
        "Implement new features and continuously improve the member experience",
        "Support digital communications and lead technology innovation"
    ]
},

   sheena:{
    name:"Sheena Adlao",
    position:"Equipment Manager",
    image:"images/officers/Sheena.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Equipment Manager of Pro Pulot Co., ensuring club equipment is properly maintained, organized, and available for every activity and event.",

    responsibilities:[
        "Maintain club equipment",
        "Prepare equipment for events",
        "Monitor equipment inventory",
        "Ensure equipment readiness"
    ]
},

    justice:{
    name:"Justice Villanueva",
    position:"Member Onboarding Associate",
    image:"images/officers/Justice.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as a Member Onboarding Associate of Pro Pulot Co., ensuring every new member feels welcomed, informed, and connected to the community.",

    responsibilities:[
        "Welcome and orient new members",
        "Introduce club programs and activities",
        "Assist with member integration",
        "Promote a positive community experience"
    ]
},

    roch:{
    name:"Roch Laquinon",
    position:"Member Onboarding Associate",
    image:"images/officers/Roch.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as a Member Onboarding Associate of Pro Pulot Co., helping new members become active participants while fostering an inclusive and supportive environment.",

    responsibilities:[
        "Assist with member onboarding",
        "Support community engagement activities",
        "Encourage participation in club events",
        "Help build an inclusive community"
    ]
},

  rovelyn:{
    name:"Rovelyn Amil",
    position:"Member Onboarding Associate",
    image:"images/officers/rovelyn.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as a Member Onboarding Associate of Pro Pulot Co., creating a welcoming environment that encourages every member to grow, participate, and enjoy the community.",

    responsibilities:[
        "Welcome new members",
        "Support onboarding activities",
        "Encourage active participation",
        "Promote a friendly club culture"
    ]
},

   derence:{
    name:"Derence Gadiana",
    position:"Dink Master 1",
    image:"images/officers/Derence.png",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Dink Master 1 of Pro Pulot Co., mentoring members in developing proper pickleball fundamentals, refining techniques, and building confidence on the court.",

    responsibilities:[
        "Coach members on fundamental pickleball skills",
        "Demonstrate proper techniques and strategies",
        "Support player development during club activities",
        "Promote sportsmanship and continuous learning"
    ]
},
    
  philip:{
    name:"Philip Clavecillas",
    position:"Dink Master 2",
    image:"images/officers/Philip.png",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Dink Master 2 of Pro Pulot Co., assisting in player development by helping members improve their skills, confidence, and understanding of the game.",

    responsibilities:[
        "Assist in coaching new members",
        "Provide technical guidance during practices",
        "Encourage continuous skill development",
        "Support community training activities"
    ]
}

};

const specialMembers = {

    member1:{
        name:"Pao Nemil",
        title:"Featured Special Member",
        image:"images/special/member1.jpg",

        tenure:"Special Guest",

        bio:"A valued friend of Pro Pulot Co. who joined the community during a memorable club event and continues to share the spirit of sportsmanship and fellowship.",

        responsibilities:[
            "Participated in community activities",
            "Shared memorable moments with the club",
            "Promoted camaraderie and friendship",
            "Supported Pro Pulot Co. events"
        ]
    },

    member2:{
        name:"Sharon Ano-os",
        title:"Featured Special Member",
        image:"images/special/member2.jpg",

        tenure:"Special Guest",

        bio:"A valued guest of Pro Pulot Co. who joined the community during a special club event, contributing to an atmosphere of friendship, sportsmanship, and shared enthusiasm for pickleball.",

        responsibilities:[
        "Participated in community activities",
        "Built meaningful connections with members",
        "Promoted sportsmanship and camaraderie",
        "Shared memorable experiences with the club"
    ]
        
    },

    member3:{
        name:"Randy Cipriano",
        title:"Featured Special Member",
        image:"images/special/member3.jpg",

        tenure:"Special Guest",

        bio:"Joined Pro Pulot Co. during a memorable gathering, becoming part of a special occasion that strengthened friendships and celebrated the spirit of the pickleball community.",
 
        responsibilities:[
        "Participated in club activities",
        "Supported community engagement",
        "Encouraged positive fellowship",
        "Created lasting memories with members"
    ]
        
    },

    member4:{
        name:"Roswel Dayanan",
        title:"Featured Special Member",
        image:"images/special/member4.jpg",

        tenure:"Special Guest",

        bio:"Recognized as a featured special member for sharing meaningful moments with Pro Pulot Co. through fellowship, community events, and a genuine passion for bringing people together through sport.",

        responsibilities:{
        "Joined community events",
        "Fostered friendship and unity",
        "Shared positive experiences with members",
        "Contributed to memorable club moments"
    }

};

const leaderModal = document.getElementById("leader-modal");

function loadLeader(id){

    currentLeader = id;

    const leader = leaders[id];

    console.log("Position:", leader.position);

    document.getElementById("leader-photo").src = leader.image;
    document.getElementById("leader-name").textContent = leader.name;
    document.getElementById("leader-position").textContent = leader.position;

    document.getElementById("leader-tenure").textContent = leader.tenure;
    document.getElementById("leader-bio").textContent = leader.bio;

    const responsibilityList = document.getElementById("leader-responsibilities");

    responsibilityList.innerHTML = "";

   if (leader.responsibilities) {

    leader.responsibilities.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        responsibilityList.appendChild(li);

    });

   }
}

function loadSpecialMember(id){

    const member = specialMembers[id];

    document.getElementById("leader-photo").src = member.image;

    document.getElementById("leader-name").textContent = member.name;

    document.getElementById("leader-position").textContent = member.title;

    document.getElementById("leader-tenure").textContent = member.tenure;

    document.getElementById("leader-bio").textContent = member.bio;

    const responsibilityList =
        document.getElementById("leader-responsibilities");

    responsibilityList.innerHTML = "";

    member.responsibilities.forEach(item=>{

        const li = document.createElement("li");

        li.textContent = item;

        responsibilityList.appendChild(li);

    });

}

document.querySelectorAll(".leader-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        loadLeader(this.dataset.leader);

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
document.getElementById("leader-next").onclick = function(){

    let index = leaderOrder.indexOf(currentLeader);

    index++;

    if(index >= leaderOrder.length){
        index = 0;
    }

    loadLeader(leaderOrder[index]);

};

document.getElementById("leader-prev").onclick = function(){

    let index = leaderOrder.indexOf(currentLeader);

    index--;

    if(index < 0){
        index = leaderOrder.length - 1;
    }

    loadLeader(leaderOrder[index]);

};
