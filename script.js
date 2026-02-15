/* =========================================
   1. EDIT YOUR REASONS HERE
   ========================================= */
const reasons = [
    {
        title: "Your Eyes",
        text: "I get lost in them every time. They are my favorite view in any room.",
        src: ""
    },
    {
        title: "Your Smile",
        text: "Those dimples and that light you give off. I still remember the day you laughed so hard I forgot everything else.",
        src: ""
    },
    {
        title: "Your Scent",
        text: "It feels like home. It makes every place softer and safer when you're near.",
        src: ""
    },
    {
        title: "Your Voice",
        text: "The calm that finds me when you speak. It's my favorite sound.",
        src: ""
    },
    {
        title: "Your Style",
        text: "You carry yourself with grace and edge. You make every simple moment look iconic.",
        src: ""
    },
    {
        title: "Your Kindness",
        text: "The way you care for me and others shows how beautiful your heart is.",
        src: ""
    }
];

/* =========================================
   2. EDIT YOUR TIMELINE HERE (Story Mode)
   ========================================= */
const timelineEvents = [
    { 
        date: "APRIL 1, 2024", 
        src: "images/timelineapr1.png",
        text: "Ilk defe telefonumu ogurladin, no ne tolko" 
    },
    { 
        date: "APRIL 29, 2024", 
        src: "images/timelineapr29.png",
        text: "Heh ilk sinifde sekil" 
    },
 { 
        date: "APRIL 29, 2024", 
        src: "images/timelinemay7.png",
        text: "Hehe another one" 
    },
    { 
        date: "FEBRUARY 17, 2026", 
        src: "images/timelinefeb7.jpeg", 
        text: "And here we are today. You just crushed your exams, and we're celebrating on our own terms. I'm proud of the woman you are becoming. Here's to the next chapter of us." 
    }
];

/* =========================================
   3. RENDER LOGIC (Updated for Images & Paragraphs)
   ========================================= */
const timelineContainer = document.getElementById('timeline-container');
timelineContainer.innerHTML = ""; // Clear any default content

timelineEvents.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
        <div class="t-date">${item.date}</div>
        <img class="timeline-photo" src="${item.src}" onerror="this.style.display='none'">
        <div class="t-content">
            <p class="timeline-text">${item.text}</p>
        </div>
    `;
    timelineContainer.appendChild(div);
});

// --- Randomizer Logic ---
function revealReason() {
    const display = document.getElementById("vault-display");
    const random = reasons[Math.floor(Math.random() * reasons.length)];
    
    let imageHtml = random.src ? `<img src="${random.src}" alt="${random.title}">` : '';
    
    display.innerHTML = `
        <div class="memory-card">
            <h3 class="red-text" style="margin-bottom:10px;">${random.title}</h3>
            ${imageHtml}
            <div class="memory-text">${random.text}</div>
        </div>
    `;
}

// --- Start Experience ---
function startExperience() {
    // Music is already playing on page load, just scroll to vault
    const vault = document.getElementById('vault');
    if (vault) {
        vault.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- Countdown Logic (Target: April 7, 2026) ---
const targetDate = new Date("April 7, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerText = "Happy 2 years";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = 
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}, 1000);

// --- YouTube Music Player (Autoplay via iframe) ---
// Music starts automatically on page load with mute=1 for browser autoplay compliance
// User can unmute by clicking the video player controls if needed

// Optional: Add visual indicator that music is playing
window.addEventListener('load', () => {
    // Music is already playing via the iframe autoplay
    console.log('Arctic Monkeys - 505 is now playing...');
});

// --- Section Reveal ---
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}