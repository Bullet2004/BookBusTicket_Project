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

function validateForm() {
    const password = document.getElementById('password');
    const formMessage = password.parentElement.nextElementSibling;
    let isValid = true;

    if (password.value.length < 6) {
        formMessage.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        isValid = false;
    } else {
        formMessage.textContent = '';
    }

    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');
    const form = document.querySelector('form');

    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    form.addEventListener('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    passwordInput.addEventListener('blur', validateForm);

    const loginForm = document.querySelector('.form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;
            
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                sessionStorage.setItem('currentUser', JSON.stringify({
                    username: user.username,
                    role: user.role
                }));
                
                if (user.role === 'admin') {
                    window.location.href = '/src/view/admin_view/index.html';
                } else {
                    window.location.href = '/src/view/user_view/index.html';
                }
            } else {
                const password = document.getElementById('password');
                const formMessage = password.parentElement.nextElementSibling;
                formMessage.textContent = 'Tên đăng nhập hoặc mật khẩu không chính xác';

            }
        });
    }
}); 