// Smooth scroll to section
function smoothScroll(targetId, duration) {
    const targetSection = document.querySelector(targetId); // Find target section
    const targetPosition = targetSection.offsetTop; // Get target section's top position
    const startPosition = window.pageYOffset; // Get current scroll position
    const distance = targetPosition - startPosition; // Calculate distance to scroll
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        window.scrollTo(0, startPosition + distance * progress);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth scrolling
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation); // Start animation
}

// Smooth scroll to top
function smoothScrollToTop(duration) {
    smoothScroll("#content", duration);
};

// Add event listeners to navbar buttons for smooth scrolling
document.getElementById("aboutBtn").addEventListener("click", function() {
    smoothScroll("#content", 1000); // Change duration as needed
});

document.getElementById("portfolioBtn").addEventListener("click", function() {
    smoothScroll("#portfolio", 1000); // Change duration as needed
});

document.getElementById("skillsBtn").addEventListener("click", function() {
    smoothScroll("#skills", 1000); // Change duration as needed
});

document.getElementById("contactBtn").addEventListener("click", function() {
    smoothScroll("#contacts", 1000); // Change duration as needed
});

// Add event listeners to popup menu buttons for smooth scrolling
document.getElementById("aboutBtnPopup").addEventListener("click", function() {
    smoothScroll("#content", 1000); // Change duration as needed
});

document.getElementById("portfolioBtnPopup").addEventListener("click", function() {
    smoothScroll("#portfolio", 1000); // Change duration as needed
});

document.getElementById("skillsBtnPopup").addEventListener("click", function() {
    smoothScroll("#skills", 1000); // Change duration as needed
});

document.getElementById("contactBtnPopup").addEventListener("click", function() {
    smoothScroll("#contacts", 1000); // Change duration as needed
});

function copyEmail(event){
    event.preventDefault();
    const emailAddress = "lark.orillos@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    alert("Email Copied! " + emailAddress);
}

// Toggle visibility of pop-up menu on burger icon click
document.getElementById('burgerIcon').addEventListener('click', function() {
    // Toggle visibility of pop-up menu
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.classList.toggle('hidden');

    // Hide burger icon when clicked
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.style.display = 'none';
});

// Close pop-up menu on close button click
document.getElementById('closeBtn').addEventListener('click', function() {
    // Hide pop-up menu
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.classList.add('hidden');

    // Show burger icon
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.style.display = 'block';
});

// Redirect to corresponding section when a button is clicked
document.getElementById('aboutBtn').addEventListener('click', function() {
    // Hide pop-up menu
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.classList.add('hidden');

    // Show burger icon
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.style.display = 'block';

    // Redirect to About section
    window.location.href = '#about';
});

document.getElementById('portfolioBtn').addEventListener('click', function() {
    // Hide pop-up menu
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.classList.add('hidden');

    // Show burger icon
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.style.display = 'block';

    // Redirect to Portfolio section
    window.location.href = '#portfolio';
});

document.getElementById('skillsBtn').addEventListener('click', function() {
    // Hide pop-up menu
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.classList.add('hidden');

    // Show burger icon
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.style.display = 'block';

    // Redirect to Skills section
    window.location.href = '#skills';
});

document.getElementById('contactBtn').addEventListener('click', function() {
    // Hide pop-up menu
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.classList.add('hidden');

    // Show burger icon
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.style.display = 'block';

    // Redirect to Contact section
    window.location.href = '#contacts';
});
