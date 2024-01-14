

document.getElementById('login-submit').addEventListener('click',function () {
        const emailField = document.getElementById('user-email');
        const email = emailField.value;

        const passwordField = document.getElementById('user-password');
        const password = passwordField.value;
        console.log(email, password);
        
        
        if(password && email){
                window.location.href ='./index-2.html'
        }
        else{
                alert('no paaswrd & email entered')
                console.log()
        }

    })

