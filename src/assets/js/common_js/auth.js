document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        if (currentUser.role === 'admin') {
            const adminAccountLink = document.querySelector('.navbar-nav .nav-item:last-child .nav-link');
            if (adminAccountLink) {
                adminAccountLink.innerHTML = `
                    <i class="fas fa-user"></i>
                    <span>${currentUser.username}</span>
                `;
                adminAccountLink.href = '#';
            }
        } else {
            const userNavItems = document.querySelector('.nav-list-items:last-child');
            if (userNavItems) {
                userNavItems.innerHTML = `
                    <li class="nav-item">
                        <a href="#">
                            <i class="fas fa-user"></i>
                            <span>${currentUser.username}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" onclick="logout()">Đăng xuất</a>
                    </li>
                `;
            }
        }
    } else {
        if (window.location.pathname.includes('admin_view')) {
            window.location.href = '/src/view/common_view/login.html';
        } else {
            const userNavItems = document.querySelector('.nav-list-items:last-child');
            if (userNavItems) {
                userNavItems.innerHTML = `
                    <li class="nav-item">
                        <a href="/src/view/common_view/login.html">Đăng nhập</a>
                    </li>
                    <li class="nav-item">
                        <a href="/src/view/common_view/signup.html">Đăng ký</a>
                    </li>
                `;
            }
        }
    }
});

function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = '/src/view/common_view/login.html';
} 