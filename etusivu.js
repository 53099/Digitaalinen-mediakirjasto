document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const backButton = document.querySelector('.back-button');
    const main = document.querySelector('.main-content');

    if (!sidebar || !backButton || !main) return;

    backButton.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('sidebar--hidden');
    });

    // clicking the main content hides the sidebar when it's visible (mobile-like behavior)
    main.addEventListener('click', function() {
        if (!sidebar.classList.contains('sidebar--hidden')) {
            sidebar.classList.add('sidebar--hidden');
        }
    });
});