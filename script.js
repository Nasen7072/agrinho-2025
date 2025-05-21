function toggleMenu() {
    const menu = document.querySelector('.menu-btn');
    menu.classList.toggle('active');
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const themeButton = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌕'; // Muda para modo claro
    } else {
        themeButton.textContent = '🌙'; // Muda para modo escuro
    }
}

function increaseFont() {
    document.body.classList.add('large-font');
}

function decreaseFont() {
    document.body.classList.remove('large-font');
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}
