document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const backButton = document.querySelector('.back-button');
    const main = document.querySelector('.main-content');

    if (!sidebar || !backButton || !main) return;

    // Create a return button element
    const returnButton = document.createElement('div');
    returnButton.className = 'return-button';
    returnButton.textContent = '→';
    returnButton.style.display = 'none';
    main.insertBefore(returnButton, main.firstChild);

    function toggleSidebar() {
        const isHidden = sidebar.classList.contains('sidebar--hidden');

        if (isHidden) {
            // Show sidebar, show back button, hide return button
            sidebar.classList.remove('sidebar--hidden');
            main.classList.remove('main-content--full');
            backButton.style.display = 'block';
            returnButton.style.display = 'none';
        } else {
            // Hide sidebar, hide back button, show return button
            sidebar.classList.add('sidebar--hidden');
            main.classList.add('main-content--full');
            backButton.style.display = 'none';
            returnButton.style.display = 'block';
        }
    }
    backButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSidebar();
    });

    returnButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSidebar();
    });

    // clicking the main content hides the sidebar when it's visible (mobile-like behavior)
    main.addEventListener('click', function() {
        if (!sidebar.classList.contains('sidebar--hidden')) {
            sidebar.classList.add('sidebar--hidden');
            main.classList.add('main-content--full');
            backButton.style.display = 'none';
            returnButton.style.display = 'block';
        }
    });
});