document.addEventListener("DOMContentLoaded", () => {
    // Select all main page layers
    const layers = document.querySelectorAll(".layer");
    const container = document.querySelector(".container");
    const nav = document.querySelector(".navigation");
    const hamburger = document.querySelector(".hamburger");
   
    // Guard clause: If core elements don't exist, stop.
    if (!layers.length || !container || !nav || !hamburger) {
        console.error("Core navigation elements not found. main.js will not run.");
        return;
    }
    const tabs = nav.querySelectorAll("ul li a");
   
    // Select the specific text to animate in the "Comments" section
    const revealText1 = container.querySelector(".layer5 .testimonial h1");
    // The column transition animation - removes active state from all layers
    function collapse() {
        layers.forEach((layer) => {
            layer.classList.remove("active");
        });
       
        // Only remove 'reveal' class if the element was found
        if (revealText1) {
            revealText1.classList.remove("reveal");
        }
    }
    // Navigation functions - each ensures clean state before activating
    function home() {
        collapse();
        if (layers[0]) layers[0].classList.add("active");
    }
    function about() {
        collapse();
        if (layers[1]) layers[1].classList.add("active");
    }
    function services() {
        collapse();
        if (layers[2]) layers[2].classList.add("active");
    }
    function portfolio() {
        collapse();
        if (layers[3]) layers[3].classList.add("active");
    }
    function comments() {
        collapse();
        if (layers[4]) layers[4].classList.add("active");
        // Add reveal animation after layer is active
        if (revealText1) {
            // Small delay to ensure layer transition completes first
            setTimeout(() => {
                revealText1.classList.add("reveal");
            }, 50);
        }
    }
    function contact() {
        collapse();
        if (layers[5]) layers[5].classList.add("active");
    }
    // Make functions globally accessible for inline onclick attributes
    window.home = home;
    window.about = about;
    window.services = services;
    window.portfolio = portfolio;
    window.comments = comments;
    window.contact = contact;
    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });
    // Text animation for the "About" section
    const aboutContent = document.querySelector(".layer2 .content");
    if (aboutContent) {
        const paragraphs = aboutContent.querySelectorAll("p");
        if (paragraphs.length > 1) {
            // Wrap each character in a span for animation
            paragraphs[1].innerHTML = paragraphs[1]
                .textContent.replace(/\S/g, "<span>$&</span>");
        }
    }
    // Active state handler for navigation tabs
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
           
            // Close hamburger menu on tab click
            hamburger.classList.remove("active");
            nav.classList.remove("active");
        });
    });
    // Initialize: Show home page on load
    home();
});