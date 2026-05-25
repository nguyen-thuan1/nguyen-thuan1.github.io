// Grab the button and the body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Add a click event listener to the button
themeToggleBtn.addEventListener('click', () => {
    // Check if the current theme is dark
    if (body.getAttribute('data-theme') === 'dark') {
        // If it is, remove the attribute to revert to light mode
        body.removeAttribute('data-theme');
    } else {
        // If it isn't, set the attribute to dark
        body.setAttribute('data-theme', 'dark');
    }
});