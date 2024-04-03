document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.querySelector('.wrapper1 .register-link a');
    const loginLink = document.querySelector('.wrapper2 .register-link a');

    registerLink.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector('.wrapper1').style.display = 'none';
        document.querySelector('.wrapper2').style.display = 'block';
    });

    loginLink.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector('.wrapper2').style.display = 'none';
        document.querySelector('.wrapper1').style.display = 'block';
    });
});
    