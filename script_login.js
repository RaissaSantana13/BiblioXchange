document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.querySelector('#email');
            const passwordInput = document.querySelector('#password');

            if (emailInput.value && passwordInput.value) {
                window.location.href = 'vitrine.html'; 
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    } else {
        console.error("Erro: O formulário com ID 'loginForm' não foi encontrado.");
    }
});