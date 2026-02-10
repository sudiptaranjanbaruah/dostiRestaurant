// ========================================
// DOSTI RESTAURANT - INTERACTIVE FEATURES
// Vanilla JavaScript | No Dependencies
// ========================================

// === SCROLL-BASED FRAME ANIMATION ===
const canvas = document.getElementById('scrollCanvas');
const context = canvas.getContext('2d');

// Configuration
const frameCount = 121;
const framePath = 'ezgif-76f8bb76ada1dbc7-jpg/ezgif-frame-';

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Preload all frames
const frames = [];
let imagesLoaded = 0;

function preloadFrames() {
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, '0');
        img.src = `${framePath}${frameNumber}.jpg`;

        img.onload = () => {
            imagesLoaded++;
            // Draw first frame when loaded
            if (i === 1) {
                drawFrame(0);
            }
        };

        frames.push(img);
    }
}

// Draw specific frame
function drawFrame(index) {
    if (frames[index] && frames[index].complete) {
        const img = frames[index];

        // Calculate dimensions to cover canvas while maintaining aspect ratio
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider than image
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            // Canvas is taller than image
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
}

// Update frame based on scroll position
function updateFrame() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate which frame to show based on scroll position
    // We'll animate through all frames as user scrolls through the entire page
    const scrollFraction = scrollTop / maxScroll;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );

    drawFrame(frameIndex);

    // Optional: Update based on hero section scroll only
    // Uncomment below and comment above if you want animation only in hero section
    /*
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.offsetHeight;
    const heroScrollFraction = Math.min(1, scrollTop / heroHeight);
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(heroScrollFraction * frameCount)
    );
    drawFrame(frameIndex);
    */
}

// Initialize frame animation
preloadFrames();

// Update frame on scroll with throttling for performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateFrame();
            ticking = false;
        });
        ticking = true;
    }
});

// Initial frame update
updateFrame();

// === CUSTOM ANIMATED SCROLLBAR ===
const scrollbarCanvas = document.getElementById('scrollbarCanvas');
const scrollbarContext = scrollbarCanvas.getContext('2d');

// Scrollbar configuration
const scrollbarFrameCount = 96;
const scrollbarFramePath = 'french fry/WhatsApp Video 2026-02-07 at 15.34.23';

// Set scrollbar canvas size
function resizeScrollbarCanvas() {
    const dpr = window.devicePixelRatio || 1;
    scrollbarCanvas.width = 60 * dpr;
    scrollbarCanvas.height = 300 * dpr;
    scrollbarCanvas.style.width = '60px';
    scrollbarCanvas.style.height = '300px';
    scrollbarContext.scale(dpr, dpr);
}
resizeScrollbarCanvas();
window.addEventListener('resize', resizeScrollbarCanvas);

// Preload scrollbar frames
const scrollbarFrames = [];
let scrollbarImagesLoaded = 0;

function preloadScrollbarFrames() {
    for (let i = 0; i < scrollbarFrameCount; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(2, '0');
        img.src = `${scrollbarFramePath}${frameNumber}.png`;

        img.onload = () => {
            scrollbarImagesLoaded++;
            // Draw first frame when loaded
            if (i === 0) {
                drawScrollbarFrame(0);
            }
        };

        scrollbarFrames.push(img);
    }
}

// Draw specific scrollbar frame
function drawScrollbarFrame(index) {
    if (scrollbarFrames[index] && scrollbarFrames[index].complete) {
        const img = scrollbarFrames[index];

        // Clear canvas
        scrollbarContext.clearRect(0, 0, 60, 300);

        // Calculate dimensions to fit canvas while maintaining aspect ratio
        const canvasRatio = 60 / 300;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider than image
            drawWidth = 60;
            drawHeight = 60 / imgRatio;
            offsetX = 0;
            offsetY = (300 - drawHeight) / 2;
        } else {
            // Canvas is taller than image
            drawWidth = 300 * imgRatio;
            drawHeight = 300;
            offsetX = (60 - drawWidth) / 2;
            offsetY = 0;
        }

        scrollbarContext.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
}

// Update scrollbar frame based on scroll position
function updateScrollbarFrame() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate which frame to show based on scroll position
    const scrollFraction = scrollTop / maxScroll;
    const frameIndex = Math.min(
        scrollbarFrameCount - 1,
        Math.floor(scrollFraction * scrollbarFrameCount)
    );

    drawScrollbarFrame(frameIndex);
}

// Initialize scrollbar animation
preloadScrollbarFrames();

// Update scrollbar on scroll (combined with main canvas update)
let scrollbarTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollbarTicking) {
        window.requestAnimationFrame(() => {
            updateFrame();
            updateScrollbarFrame();
            scrollbarTicking = false;
        });
        scrollbarTicking = true;
    }
});

// Initial scrollbar update
updateScrollbarFrame();

// === MOBILE MENU TOGGLE ===
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === MENU CATEGORY FILTER ===
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItems = document.querySelectorAll('.menu-item');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');

        // Filter menu items
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                // Trigger reflow for animation
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// === LAZY LOADING IMAGES ===
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger loading
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
        img.src = img.src;
    });
}

// === RESERVATION FORM VALIDATION ===
const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Basic validation
        if (!name || !phone || !date || !time || !guests) {
            alert('Please fill in all required fields.');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^[0-9+\s-]{10,}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Date validation (must be today or future)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert('Please select a date from today onwards.');
            return;
        }

        // Success message
        alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been received. We'll confirm via phone at ${phone}.`);

        // Reset form
        reservationForm.reset();

        // In a real application, you would send this data to a server
        // Example:
        // fetch('/api/reservations', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, phone, date, time, guests })
        // });
    });
}

// === SET MINIMUM DATE FOR RESERVATION ===
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
const sections = document.querySelectorAll('.about, .menu, .specials, .testimonials, .gallery, .contact');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// === GALLERY LIGHTBOX (Simple Implementation) ===
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;

        // Add lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;

        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;

        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 90vh;
            border-radius: 8px;
        `;

        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 40px;
            color: white;
            cursor: pointer;
            font-weight: 300;
        `;

        document.body.appendChild(lightbox);

        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });

        // Prevent closing when clicking on image
        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

// === CONSOLE MESSAGE ===
console.log('%c🍽️ Dosti Restaurant', 'font-size: 20px; font-weight: bold; color: #8B4513;');
console.log('%cWebsite crafted with ❤️', 'font-size: 12px; color: #D4A574;');
console.log('%cScroll Animation: 121 frames loaded', 'font-size: 12px; color: #6B4423;');
