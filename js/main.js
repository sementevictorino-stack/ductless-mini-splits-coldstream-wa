// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 0, 51, 0.95)';
        } else {
            header.style.backgroundColor = '#1a0033';
        }
    });
    
    // Phone number click tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'phone',
                    event_label: 'phone_call'
                });
            }
        });
    });
    
    // Form submission tracking
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'submit', {
                    event_category: 'form',
                    event_label: 'quote_request'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .trust-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Emergency service banner
function showEmergencyBanner() {
    const banner = document.createElement('div');
    banner.className = 'emergency-banner';
    banner.innerHTML = '🚨 24/7 Emergency HVAC Service Available - Call Now: +1 (888) 918-9104';
    document.body.insertBefore(banner, document.body.firstChild);
    
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    if (header) header.classList.add('with-emergency');
    if (hero) hero.classList.add('with-emergency');
}

// Show emergency banner on page load
document.addEventListener('DOMContentLoaded', showEmergencyBanner);

// Local SEO enhancements
function initLocalSEO() {
    // Add structured data for local business
    const businessInfo = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": "Coldstream Ductless Mini Splits",
        "telephone": "+1-888-918-9104",
        "url": window.location.href,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coldstream",
            "addressRegion": "WA",
            "addressCountry": "US"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 48.1,
                "longitude": -119.5
            },
            "geoRadius": "50000"
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(businessInfo);
    document.head.appendChild(script);
}

// Initialize local SEO
document.addEventListener('DOMContentLoaded', initLocalSEO);
