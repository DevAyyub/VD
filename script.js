document.documentElement.classList.add('js');

/* =========================================
    1. EDIT YOUR REASONS HERE
    ========================================= */
const reasons = [
    {
        title: "Your Eyes",
        text: "Как можно не влюбиться в эти глаза?",
        src: "images/eyes1.jpeg"
    },
    {
        title: "Your Eyes",
        text: "Еще глаза",
        src: "images/eyes2.png"
    },
    {
        title: "Your Eyes",
        text: "ЕЩЕ ГЛАЗАААА",
        src: "images/eyes3.png"
    },
        {
        title: "Your Lips",
        text: "Как можно без этих губ ушш всегда умиляюсь",
        src: "images/cutelips.jpeg"
    },
    {
        title: "Your Smile",
        text: "Ушш эти ямочки когда ты улыбаешься",
        src: ""
    },
    {
        title: "Your Scent",
        text: "Обожаю твой запах ойдаа",
        src: ""
    },
    {
        title: "Your Voice",
        text: "Музыка для моих ушей",
        src: ""
    },
    {
        title: "Your Style",
        text: "Ну да ты всегда у меня стильная красотка прям моя малышка",
        src: ""
    },
    {
        title: "Your Kindness",
        text: "Усс ты так заботишься обо мне всегда милаха",
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
        date: "MAY 7, 2024", 
        src: "images/timelinemay7.png",
        text: "Hehe another one" 
    },
     { 
        date: "MAY 13, 2024", 
        src: "images/timelinemay13.png",
        text: "Фотка с моими очками" 
    },
     { 
        date: "JULY 3, 2024", 
        src: "images/timelinejuly3.png",
        text: "C Араз маркета шли" 
    },
     { 
        date: "AUGUST 14, 2024", 
        src: "images/timelineaug14.png",
        text: "Приготовила мне кекс первый раз и в парке кушал" 
    },
     { 
        date: "SEPTEMBER 18, 2024", 
        src: "images/timelinesep18.jpeg",
        text: "Летим в Турцию первый раз вместе" 
    },
     { 
        date: "OCTOBER 3, 2024", 
        src: "images/timelineoct3.png",
        text: "Вместе на тандоган" 
    },
     { 
        date: "OCTOBER 24, 2024", 
        src: "images/timelineoct24.png",
        text: "УСС Заснула на плече" 
    },
    { 
        date: "NOVEMBER 1, 2024", 
        src: "images/timelinenov1.png",
        text: "На дейте ушш как красиво оделись и выглядим" 
    },
     { 
        date: "NOVEMBER 2, 2024", 
        src: "images/timelinenov2.png",
        text: "А тут я уже лежу на плече" 
    },
     { 
        date: "DECEMBER 20, 2024", 
        src: "images/timelinedec20.png",
        text: "Понравилась наша эта фотка" 
    },    
    { 
        date: "DECEMBER 26, 2024", 
        src: "images/timelinedec26.png",
        text: "Брух новый год близок а мы в кофешопе делаем operating systems" 
    },
    { 
        date: "FEBRUARY 3, 2025", 
        src: "images/timelinefeb3.png",
        text: "А вот летим обратно в Баку уже первый раз" 
    },
    { 
        date: "FEBRUARY 23, 2025", 
        src: "images/timelinefeb23.png",
        text: "И пхпхх летим обратно в турцию через 20 дней" 
    },
    { 
        date: "MARCH 28, 2025", 
        src: "images/timelinemarch28.jpeg",
        text: "Ушш на нее в шлеме сотри милотаа" 
    },
        { 
        date: "JANUARY 6, 2026", 
        src: "images/timelinejan6.jpeg", 
        text: "Уссс спить улыбаясь" 
    },
    { 
        date: "FEBRUARY 6, 2026", 
        src: "images/timelinefeb6.png", 
        text: "Один из недавних дней" 
    },
    { 
        date: "FEBRUARY 7, 2026", 
        src: "images/timelinefeb7.jpeg", 
        text: "ПХхпхп в конце захотел эту фотку добавить" 
    }
];

/* =========================================
   3. RENDER LOGIC (Updated for Images & Paragraphs)
   ========================================= */
const timelineContainer = document.getElementById('timeline-container');
if (timelineContainer) {
    timelineContainer.innerHTML = ""; // Clear any default content

    timelineEvents.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="t-date">${item.date}</div>
            <img class="timeline-photo" src="${item.src}" alt="${item.date}" loading="lazy" decoding="async" onerror="this.style.display='none'">
            <div class="t-content">
                <p class="timeline-text">${item.text}</p>
            </div>
        `;
        timelineContainer.appendChild(div);
    });
}

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