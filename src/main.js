// Matrix Rain Effect
function createMatrixRain() {
    const matrix = document.getElementById('matrix-rain');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    for (let i = 0; i < columns; i++) {
        const drop = document.createElement('div');
        drop.className = 'matrix-rain';
        drop.style.left = i * fontSize + 'px';
        drop.style.animationDelay = Math.random() * 2 + 's';
        matrix.appendChild(drop);
        
        setInterval(() => {
            drop.innerText = String.fromCharCode(0x30A0 + Math.random() * 96);
            drop.style.top = Math.random() * height + 'px';
        }, 100);
    }
}

// Terminal Text Effect
function terminalText() {
    const texts = [
        'Cybersecurity Enthusiast',
        'Penetration Tester',
        'Ethical Hacker',
        'Bug Bounty Hunter'
    ];
    let currentText = 0;
    let currentChar = 0;
    const terminalElement = document.getElementById('terminal-text');
    
    function type() {
        if (currentChar < texts[currentText].length) {
            terminalElement.innerHTML = texts[currentText].substring(0, currentChar + 1) + '<span class="terminal-cursor"></span>';
            currentChar++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (currentChar > 0) {
            terminalElement.innerHTML = texts[currentText].substring(0, currentChar - 1) + '<span class="terminal-cursor"></span>';
            currentChar--;
            setTimeout(erase, 50);
        } else {
            currentText = (currentText + 1) % texts.length;
            setTimeout(type, 500);
        }
    }
    
    type();
}

// Age Calculator
function updateAge() {
    const birthDate = new Date('2005-02-13');
    const now = new Date();
    
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
        days += prevMonth.getDate();
    }
    
    const ageElement = document.getElementById('age-counter');
    ageElement.innerHTML = `<span class="text-neon-pink">[</span> ${years} years : ${months} months : ${days} days <span class="text-neon-pink">]</span>`;
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.setProperty('--skill-level', level + '%');
        }, 500);
    });
}

// Project Card Hover Effects
function initProjectCards() {
    const cards = document.querySelectorAll('.cyber-project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Konami Code Easter Egg
function initKonamiCode() {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let currentCode = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === code[currentCode]) {
            currentCode++;
            
            if (currentCode === code.length) {
                document.body.classList.add('matrix-mode');
                setTimeout(() => {
                    document.body.classList.remove('matrix-mode');
                }, 5000);
                currentCode = 0;
            }
        } else {
            currentCode = 0;
        }
    });
}

// Intersection Observer for Animations
function initIntersectionObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
    terminalText();
    updateAge();
    setInterval(updateAge, 1000);
    initSkillBars();
    initProjectCards();
    initMobileMenu();
    initKonamiCode();
    initIntersectionObserver();
});
