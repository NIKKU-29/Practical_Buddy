document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const navButtons = document.querySelectorAll('.carousel-nav button');
    let currentIndex = 0;
    let interval;
    let isHovered = false;
    
    function startCarousel() {
        interval = setInterval(() => {
            if (!isHovered) {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel();
            }
        }, 5000);
    }
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        navButtons.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = parseInt(button.dataset.index);
            updateCarousel();
            clearInterval(interval);
            startCarousel();
        });
    });
    
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            isHovered = true;
        });
        item.addEventListener('mouseleave', () => {
            isHovered = false;
        });
    });
    
    startCarousel();
});

// Set up IntersectionObserver to observe when the image enters and exits the viewport
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('.phone-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Image is in view
                image.classList.add('in-view');
                image.classList.remove('out-of-view');
            } else {
                // Image is out of view
                image.classList.add('out-of-view');
                image.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the image is in view
    });

    // Start observing the image element
    observer.observe(image);
});


document.addEventListener('DOMContentLoaded', function () {
    // Apply smooth scrolling to anchor links with the class 'nav-item'
    document.querySelectorAll('a.nav-item[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get target ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scroll to the start of the section
                });
            }
        });
    });
});





function menuAnimation() {
    const menu = document.querySelector("nav h3");
    const full = document.querySelector("#full-scr");
    const navimg = document.querySelector("nav img");
    let isMenuOpen = false; // Boolean is more readable

    menu.addEventListener("click", function () {
        if (!isMenuOpen) {
            full.style.top = "0";
            navimg.style.opacity = "0";
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = "1";
        }
        isMenuOpen = !isMenuOpen; // Toggle the state
    });
}

function loaderAnimation() {
    const loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200); // Duration can be dynamic based on content load
}

document.addEventListener('DOMContentLoaded', function () {
    swiperAnimation();
    menuAnimation();
    loaderAnimation();

    const loginButton = document.getElementById('login-signup-btn');
    
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link action

        // Show a loading effect or message if desired
        console.log('Redirecting...'); // You can also show a loading spinner

        // Set a timeout to redirect after 2 seconds (2000 milliseconds)
        setTimeout(() => {
            window.location.href = loginButton.href; // Redirect to the link
        }, 2000); // Adjusted to a more reasonable duration
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Determine the current page from the URL
    let currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';

    // Default to "about" if on the index/home page
    if (currentPage === 'index') currentPage = 'about';

    // Load the corresponding content
    loadPageContent(currentPage);

    // Highlight active navigation link
    highlightCurrentPage(currentPage);

    // Set up smooth page transitions
    setupPageTransitions();
});

// Function to load page content dynamically
function loadPageContent(page) {
    const contentElement = document.getElementById('content');
    if (!contentElement) return;

    let pageContent = '';

    const pages = {
        'about': `
            <div class="about-content">
                <h1>About Us</h1>
                <p>Welcome to our company. We are dedicated to providing innovative solutions and exceptional service to our clients.</p>
                <p>Founded in 2015, our team of experts brings years of experience in the industry to deliver cutting-edge technology and personalized support.</p>
                <p>Our mission is to empower businesses and individuals through technology that simplifies and enhances their daily operations.</p>
            </div>
        `,
        'students': `
            <div class="stories-content">
                <h1>Student Stories</h1>
                <p>Read inspiring stories from students who have benefited from our programs and services.</p>
                <div class="story">
                    <h2>Alex's Journey</h2>
                    <p>"The resources and support I received helped me achieve my academic goals and secure a position in my dream company."</p>
                </div>
                <div class="story">
                    <h2>Maria's Experience</h2>
                    <p>"The practical skills I learned through the program were directly applicable to real-world challenges in my field."</p>
                </div>
            </div>
        `,
        'cookies': `
            <div class="cookies-content">
                <h1>Cookie Settings</h1>
                <p>Manage your cookie preferences for this website.</p>
                <div class="cookie-options">
                    <div class="form-group">
                        <label><input type="checkbox" id="essential-cookies" checked disabled> Essential Cookies</label>
                        <p>These cookies are necessary for the website to function and cannot be disabled.</p>
                    </div>
                    <div class="form-group">
                        <label><input type="checkbox" id="analytics-cookies"> Analytics Cookies</label>
                        <p>Help us improve our website by collecting and reporting information on how you use it.</p>
                    </div>
                    <div class="form-group">
                        <label><input type="checkbox" id="marketing-cookies"> Marketing Cookies</label>
                        <p>These cookies are used to track visitors across websites to enable personalized advertisements.</p>
                    </div>
                    <button id="save-cookies">Save Preferences</button>
                </div>
            </div>
        `,
        'contact': `
            <div class="contact-content">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Reach out with any questions, feedback, or inquiries.</p>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        `,
        'privacy': `
            <div class="privacy-content">
                <h1>Privacy Policy</h1>
                <p>Last updated: February 25, 2025</p>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, contact us for support, or use our services.</p>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and for security and compliance purposes.</p>
            </div>
        `,
        'terms': `
            <div class="terms-content">
                <h1>Terms of Service</h1>
                <p>Effective date: February 25, 2025</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
            </div>
        `,
        'solutions': `
            <div class="solutions-content">
                <h1>Solutions</h1>
                <p>Discover our comprehensive range of solutions designed to meet your specific needs.</p>
            </div>
        `,
        'not-found': `
            <div class="not-found">
                <h1>Page Not Found</h1>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <a href="index.html">Return to Home</a>
            </div>
        `,
    };

    // Load the page content or fallback to not found
    contentElement.innerHTML = pages[page] || pages['not-found'];

    // Setup page-specific scripts if needed
    setupPageSpecificFunctions(page);
}

// Function to highlight the active navigation link
function highlightCurrentPage(page) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(page)) {
            link.classList.add('active');
        }
    });
}

// Function to set up page transitions smoothly
function setupPageTransitions() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetPage = link.getAttribute('href').replace('.html', '');
            loadPageContent(targetPage);
            highlightCurrentPage(targetPage);
            history.pushState({}, '', link.getAttribute('href'));
        });
    });

    window.addEventListener('popstate', () => {
        let page = window.location.pathname.split('/').pop().split('.')[0] || 'index';
        if (page === 'index') page = 'about';
        loadPageContent(page);
        highlightCurrentPage(page);
    });
}

// Function to initialize page-specific scripts (if required)
function setupPageSpecificFunctions(page) {
    if (page === 'cookies') {
        document.getElementById('save-cookies')?.addEventListener('click', () => {
            alert('Cookie preferences saved.');
        });
    } else if (page === 'contact') {
        document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const dropdownContainer = document.querySelector('.dropdown-container');
    const dropdownButton = document.querySelector('.dropdown-button');
    
    dropdownButton.addEventListener('click', function() {
        dropdownContainer.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownContainer.contains(event.target)) {
            dropdownContainer.classList.remove('active');
        }
    });
});