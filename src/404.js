document.addEventListener("DOMContentLoaded", function() {
    const currentURL = window.location.href;
    const previousURL = localStorage.getItem('previousRequest') || 'None';

    document.getElementById('currentRequest').textContent = currentURL;
    document.getElementById('previousRequest').textContent = previousURL;

    // Store the current URL as the previous request for the next visit
    localStorage.setItem('previousRequest', currentURL);
});
