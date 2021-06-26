const pass = document.getElementById('pass');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {

    password = /^hasira$/;

    var msg = [];
    if ( name.value == '' || name.value == null) {
        messages.push ('Please enter a password aye ? ');
    }

    if (!password.test(password.value)) {
        error.innerText = " Please enter the correct password ";
    } else {
        error.innerText = "Click this link to view the original webpage -> apology.html";
    }

}
