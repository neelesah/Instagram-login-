// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual submission for demo
        
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        if (username && password) {
            alert('Login attempted with username: ' + username + '\n(In a real app, this would submit to the server.)');
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // Optional: Add focus styling via JS if needed
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.border = '1px solid #0095f6';
        });
        input.addEventListener('blur', function() {
            this.parentElement.style.border = '1px solid #dbdbdb';
        });
    });
});
