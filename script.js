const buttonDismiss = document.querySelector('#dismiss');
const buttonSubmit = document.querySelector('#submit');
const modal = document.querySelector('.card');
const content = document.querySelector('.container');
const form = document.getElementById('form');
const formEmail = document.getElementById('email');
const cardEmail = document.querySelector('.card_email');




var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

buttonSubmit.addEventListener('click', () => {
   
    const enteredEmail = formEmail.value.trim();

    if (enteredEmail === '') {

        errorFunc(email, 'Email cannot be empty');

    } else if (!enteredEmail.match(pattern)) {

        errorFunc(email, 'Looks like this is not an email');
    }
    else {
        
        cardEmail.innerText = enteredEmail;
        content.classList.add("hide");
        modal.classList.remove("hide");
    }

});

buttonDismiss.addEventListener('click', () => {
    content.classList.remove("hide");
    modal.classList.add("hide");
    window.location.reload();
});

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    req.classList.add('error');
    small.classList.add('error-text');
    
}
