document.querySelector('.register-wthree').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from being submitted to the server

    var name = document.querySelector('input[name="name"]').value;
    var mobile = document.querySelector('input[name="mobile"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea').value;

    console.log('Name: ' + name);
    console.log('Mobile: ' + mobile);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
});