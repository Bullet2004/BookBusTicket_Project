// Fake user data
const users = [
    {
        username: 'silverbullet',
        password: '123456',
        role: 'admin'
    },
    {
        username: 'user01',
        password: '123456',
        role: 'user'
    }
];

// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;
            
            // Find user
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Store user info in sessionStorage
                sessionStorage.setItem('currentUser', JSON.stringify({
                    username: user.username,
                    role: user.role
                }));
                
                // Redirect based on role
                if (user.role === 'admin') {
                    window.location.href = '/src/view/admin_view/index.html';
                } else {
                    window.location.href = '/src/view/user_view/index.html';
                }
            } else {
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'form-message';
                errorMessage.textContent = 'Invalid username or password';
                
                // Remove any existing error message
                const existingError = loginForm.querySelector('.form-message');
                if (existingError) {
                    existingError.remove();
                }
                
                loginForm.appendChild(errorMessage);
            }
        });
    }
}); 