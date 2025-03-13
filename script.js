function swiperAnimation() {
    new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}

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
