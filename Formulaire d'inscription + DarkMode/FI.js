document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('submitButton').addEventListener('click', function() {
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const rememberMe = document.getElementById('rememberMe');

    // Reset styles
    pseudo.classList.remove('valid', 'invalid');
    email.classList.remove('valid', 'invalid');
    password.classList.remove('valid', 'invalid');
    confirmPassword.classList.remove('valid', 'invalid');

    // Validation checks
    let isValid = true;

    // Pseudo validation
    if (pseudo.value.length >= 6) {
        pseudo.classList.add('valid');
    } else {
        pseudo.classList.add('invalid');
        isValid = false;
    }

    // Email validation
    if (email.value.includes('@') && email.value.includes('.')) {
        email.classList.add('valid');
    } else {
        email.classList.add('invalid');
        isValid = false;
    }

    // Password validation
    if (password.value.length >= 8) {
        password.classList.add('valid');
    } else {
        password.classList.add('invalid');
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword.value === password.value && confirmPassword.value.length >= 8) {
        confirmPassword.classList.add('valid');
    } else {
        confirmPassword.classList.add('invalid');
        isValid = false;
    }

    // Se souvenir de moi validation
    if (!rememberMe.checked) {
        alert('Veuillez cocher la case "Se souvenir de moi".');
        isValid = false;
    }

    if (isValid) {
        alert('Formulaire soumis avec succès !');
    } else {
        alert('Veuillez corriger les erreurs dans le formulaire.');
    }
});
