document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');
    const loginForm = document.querySelector('#loginForm');

    
    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const email = document.querySelector('#email').value;
            const pass = document.querySelector('#password').value;

            if (email && pass) {
                window.location.href = 'index.html';
            } else {
                alert("Por favor, preencha todos os campos para testar o acesso.");
            }
        });
    }
});