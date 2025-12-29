const switcher = document.querySelector('.switcher');
const mainPage = document.querySelector('.main-page');
const dashboardSection = document.querySelector('.dashboard-section');
const stairBpointSection = document.querySelector('.stair-bpoint-section');
const slidingCardsSection = document.querySelector('.sliding-cards-section');
const brandSection = document.querySelector('.brand-section');
const footerContact = document.querySelector('.footer-contact');

const contactPage = document.querySelector('.contact-page');
const pricingPage = document.querySelector('.pricing-page');

async function generateContent(option) {
    if (option === '1') {
        dashboardSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
    } else if (option === '2') {
        stairBpointSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
    } else if (option === '3') {
        slidingCardsSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
    } else if (option === '4') {
        brandSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
    } else if (option === '5') {
        footerContact.scrollIntoView({ behavior: 'smooth' , block: 'center'});
    }
}

const trackValue = (el) => {
    const radios = el.querySelectorAll('input[type="radio"]');
    let checkedValue = null;

    const initiallyChecked = el.querySelector('input[type="radio"]:checked');
    if (initiallyChecked) {
        checkedValue = initiallyChecked.getAttribute("c-option");
        generateContent(checkedValue);
    }

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
        if (radio.checked) {
            el.classList.remove('liquid_animation');
            checkedValue = radio.getAttribute("c-option");
            void el.offsetWidth;
            el.classList.add('liquid_animation');
        }
        });
    });
}

trackValue(switcher);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".floating-block-card");
    const dashboardImage = document.querySelector(".dashboard-image");
    const grid_cards = document.querySelectorAll(".info-grid-card");
    const grid_card_2 = document.querySelector(".grid-card-2");
    const oktavia_li = document.querySelectorAll(".stair-bpoint-list ul li");
    const brand_phrase = document.querySelectorAll(".brand-phrase h2");

    // calculateTextSize(); // Initial calculation
    // window.addEventListener('resize', calculateTextSize); // Recalculate on window resize

    // function calculateTextSize() {
    //     const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    //     document.documentElement.style.setProperty('--c-text-size', `${parseFloat(0.1) * vw}px`);
    //     console.log(`Viewport width: ${vw}px, Text size set to: ${parseFloat(0.1) * vw}px`);
    // }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
        });
    }, {
        threshold: 0.15 // triggers when 15% visible (you can tweak this)
    });

    cards.forEach((card) => observer.observe(card));
    observer.observe(dashboardImage);
    grid_cards.forEach((card) => observer.observe(card));
    observer.observe(grid_card_2);
    oktavia_li.forEach((li) => observer.observe(li));
    brand_phrase.forEach((phrase) => observer.observe(phrase));
});