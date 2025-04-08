const sideNavItems = document.querySelectorAll('.sidebar-item');

sideNavItems.forEach(item => {
    item.addEventListener('click', () => {
        sideNavItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});
