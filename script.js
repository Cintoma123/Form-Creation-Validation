// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // A more robust email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Make the feedback div visible
        feedbackDiv.style.display = 'block';

        if (!isValid) {
            feedbackDiv.innerText = messages.join(' ');
            feedbackDiv.style.color = '#D8000C'; // Error color from CSS
            feedbackDiv.style.backgroundColor = '#FFBABA'; // Error background from CSS
        } else {
            feedbackDiv.innerText = 'Registration successful!';
            feedbackDiv.style.color = 'green';
            feedbackDiv.style.backgroundColor = '#DFF2BF'; // A suitable success background
        }
    });
});