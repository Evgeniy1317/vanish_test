// JavaScript for Vanish Web Landing
console.log('Script.js loaded successfully!');

// Global function for logo click
function scrollToTop(event) {
    console.log('scrollToTop function called!');
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('Scrolling to top initiated');
}

// Alternative approach - try to add event listener immediately
window.addEventListener('load', function() {
    console.log('Window loaded, trying to add logo click handler...');
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        console.log('Logo link found on window load');
        logoLink.addEventListener('click', function(e) {
            console.log('Logo clicked via window load handler!');
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu visibility
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('flex');
            
            // Change hamburger icon to X when menu is open
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileNav.classList.contains('flex')) {
                icon.innerHTML = `
                    <path d="M18 6L6 18M6 6l12 12" stroke="#34393E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            } else {
                icon.innerHTML = `
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#34393E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('flex');
                
                // Reset icon
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = `
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#34393E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            });
        });
    }
    
    // Smooth scrolling for navigation links (both desktop and mobile)
    const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                // Calculate offset for fixed header
                const headerHeight = 80; // header height
                const targetPosition = target.offsetTop - headerHeight - 20; // extra 20px margin
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log(`Scrolling to ${href} at position ${targetPosition}`);
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Logo click functionality - scroll to top
    console.log('Looking for logo link...');
    const logoLink = document.querySelector('.logo-link');
    console.log('Logo link found:', logoLink);
    
    if (logoLink) {
        console.log('Adding click listener to logo link');
        logoLink.addEventListener('click', function(e) {
            console.log('Logo clicked!');
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log('Scrolling to top initiated');
        });
        
        // Alternative approach - also try direct click on image
        const logoImage = logoLink.querySelector('img');
        if (logoImage) {
            console.log('Adding click listener to logo image');
            logoImage.addEventListener('click', function(e) {
                console.log('Logo image clicked!');
                e.preventDefault();
                e.stopPropagation();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    } else {
        console.log('Logo link not found');
        // Try alternative selector
        const altLogoLink = document.querySelector('header a[href="#"]');
        console.log('Alternative logo link found:', altLogoLink);
        if (altLogoLink) {
            altLogoLink.addEventListener('click', function(e) {
                console.log('Alternative logo clicked!');
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // CTA Button click tracking
    const ctaButton = document.querySelector('button[class*="bg-[#3152FE]"]');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('CTA Button clicked');
            // Add your purchase flow here
        });
    }
});