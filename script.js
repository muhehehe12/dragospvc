document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loading Screen ---
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.visibility = "hidden";
        }, 500);
    }, 1000);

    // --- 2. Mobile Hamburger Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        const spans = hamburger.querySelectorAll("span");
        if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(4px, 4px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
        } else {
            spans.forEach(s => s.style.transform = "none");
            spans[1].style.opacity = "1";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.querySelectorAll("span").forEach(s => s.style.transform = "none");
            hamburger.querySelectorAll("span")[1].style.opacity = "1";
        });
    });

    // --- 3. Scroll Reveal Optimization ---
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // --- 4. Language Translation Dictionary ---
    const dictionary = {
        ro: {
            "loading": "Se încarcă...",
            "nav-home": "Acasă",
            "nav-about": "Despre Noi",
            "nav-services": "Servicii",
            "nav-contact": "Contact",
            "hero-badge": "Producție & Montaj Profesional",
            "hero-title": "Tâmplărie PVC și Aluminiu la Standarde Înalte",
            "hero-subtitle": "Producem și montăm soluții complete de tâmplărie, uși culisabile din aluminiu, și oferim servicii rapide de mentenanță și înlocuire sticlă termopan.",
            "hero-cta": "Contactează-ne: 075 133 6802",
            "about-title": "Precizie în Execuție, Durabilitate în Timp",
            "about-desc-1": "Suntem specializați în producția directă și montajul sistemelor de tâmplărie PVC și Aluminiu. Controlul procesului de producție ne permite să garantăm calitatea fiecărui profil și a fiecărei ferestre care ajunge în casa ta.",
            "about-desc-2": "Pe lângă producție, oferim expertiză tehnică pentru reparații, modernizări și înlocuirea elementelor uzate (sticlă, feronerie), asigurând funcționalitatea optimă a sistemelor tale pe termen lung.",
            "services-title": "Soluțiile Noastre",
            "srv-1-title": "Producție Tâmplărie PVC & AL",
            "srv-1-desc": "Realizăm la comandă ferestre și uși din profile PVC și Aluminiu de calitate superioară, asigurând izolație termică și fonică excelentă.",
            "srv-2-title": "Uși Culisabile Aluminiu",
            "srv-2-desc": "Executăm și montăm uși glisante din aluminiu pe 2 sau 3 căi de rulare, echipate cu geam termopan, ideale pentru terase și deschideri mari.",
            "srv-3-title": "Înlocuire Sticlă Uzată",
            "srv-3-desc": "Schimbăm rapid sticla termopan spartă, fisurată sau care și-a pierdut proprietățile izolatoare (condens la interior), readucând claritatea ferestrei.",
            "srv-4-title": "Reparații Mecanisme",
            "srv-4-desc": "Înlocuim mecanismele defecte pentru uși și ferestre. Reglăm feroneria pentru o închidere perfect etanșă și o manevrare ușoară.",
            "contact-title": "Solicită o Măsurătoare",
            "contact-desc": "Proiectele încep cu o ofertare corectă. Contactează-ne pentru detalii tehnice, estimări de preț sau intervenții rapide.",
            "contact-name": "Dragoș Bejinariu",
            "contact-role": "Producător & Tehnician Tâmplărie",
            "contact-availability": "Proiecte disponibile cu finanțare/rate de la 3.000 LEI.",
            "footer-rights": "Toate drepturile rezervate."
        },
        en: {
            "loading": "Loading...",
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-services": "Services",
            "nav-contact": "Contact",
            "hero-badge": "Professional Manufacturing & Installation",
            "hero-title": "High Standard PVC & Aluminum Carpentry",
            "hero-subtitle": "We manufacture and install complete carpentry solutions, aluminum sliding doors, and provide fast maintenance and double-glazing replacement services.",
            "hero-cta": "Contact Us: 075 133 6802",
            "about-title": "Precision in Execution, Durability Over Time",
            "about-desc-1": "We specialize in the direct manufacturing and installation of PVC and Aluminum carpentry systems. Controlling the production process allows us to guarantee the quality of every profile and window that reaches your home.",
            "about-desc-2": "In addition to manufacturing, we offer technical expertise for repairs, upgrades, and the replacement of worn elements (glass, hardware), ensuring the optimal long-term functionality of your systems.",
            "services-title": "Our Solutions",
            "srv-1-title": "PVC & AL Carpentry Manufacturing",
            "srv-1-desc": "We custom-build windows and doors from premium PVC and Aluminum profiles, ensuring excellent thermal and acoustic insulation.",
            "srv-2-title": "Aluminum Sliding Doors",
            "srv-2-desc": "We build and install aluminum sliding doors on 2 or 3 tracks, equipped with double glazing, ideal for terraces and large openings.",
            "srv-3-title": "Old Glass Replacement",
            "srv-3-desc": "We quickly replace broken, cracked, or compromised double-glazing (interior condensation), restoring your window's clarity.",
            "srv-4-title": "Mechanism Repairs",
            "srv-4-desc": "We replace defective mechanisms for doors and windows. We adjust the hardware for a perfectly sealed closure and smooth operation.",
            "contact-title": "Request a Measurement",
            "contact-desc": "Projects start with an accurate quote. Contact us for technical details, price estimates, or rapid interventions.",
            "contact-name": "Dragoș Bejinariu",
            "contact-role": "Carpentry Manufacturer & Technician",
            "contact-availability": "Projects available with financing starting from 3,000 LEI.",
            "footer-rights": "All rights reserved."
        }
    };

    const btnEn = document.getElementById("lang-en");
    const btnRo = document.getElementById("lang-ro");
    const translatableElements = document.querySelectorAll("[data-i18n]");

    const switchLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dictionary[lang][key]) {
                el.innerText = dictionary[lang][key];
            }
        });

        if (lang === 'en') {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
            document.documentElement.lang = "en";
        } else {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.lang = "ro";
        }
    };

    btnEn.addEventListener("click", () => switchLanguage('en'));
    btnRo.addEventListener("click", () => switchLanguage('ro'));
});
