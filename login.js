console.log('login hosse nah')

document.getElementById('login-submit').addEventListener('click',function () {
        const emailField = document.getElementById('user-email');
        const email = emailField.value;

        const passwordField = document.getElementById('user-password');
        const password = passwordField.value;
        console.log(email, password);



    })

