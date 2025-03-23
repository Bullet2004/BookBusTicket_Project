// Check if user is logged in and update UI
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        // User is logged in
        if (currentUser.role === 'admin') {
            // Update admin navigation
            const adminAccountLink = document.querySelector('.navbar-nav .nav-item:last-child .nav-link');
            if (adminAccountLink) {
                adminAccountLink.innerHTML = `
                    <i class="fas fa-user"></i>
                    <span>${currentUser.username}</span>
                `;
                adminAccountLink.href = '#';
            }
        } else {
            // Update user navigation
            const userNavItems = document.querySelector('.nav-list-items:last-child');
            if (userNavItems) {
                // Replace both login and signup with username
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
        // User is not logged in
        if (window.location.pathname.includes('admin_view')) {
            // Redirect to login if trying to access admin pages
            window.location.href = '/src/view/common_view/login.html';
        } else {
            // Update user navigation to show login/signup
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

// Logout function
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = '/src/view/common_view/login.html';
} 