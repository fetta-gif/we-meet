// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animation on Scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Gallery Images Data
const galleryImages = [
    {
        src: 'images/gallery/activity1.jpg',
        title: 'مسرحية هادفة'
    },
    {
        src: 'images/gallery/activity2.jpg',
        title: 'برنامج إذاعي'
    },
    {
        src: 'images/gallery/activity3.jpg',
        title: 'معرض الرسم'
    }
];

// Populate Gallery with Animation
function populateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryImages.forEach((image, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 reveal';
        col.style.transitionDelay = `${index * 0.1}s`;
        
        col.innerHTML = `
            <div class="gallery-item mb-4">
                <img src="${image.src}" alt="${image.title}" class="img-fluid">
            </div>
        `;
        
        galleryGrid.appendChild(col);
    });
}

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100;
        
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Interactive Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            const alert = document.createElement('div');
            alert.className = 'alert alert-success mt-3 reveal';
            alert.innerHTML = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
            this.appendChild(alert);
            
            // Reset form and button
            this.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Remove alert after 5 seconds
            setTimeout(() => {
                alert.remove();
            }, 5000);
        }, 1500);
    });
}

// Add reveal class to sections
function addRevealClass() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('reveal')) {
            section.classList.add('reveal');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateGallery();
    addRevealClass();
    reveal(); // Initial check for visible elements
});
