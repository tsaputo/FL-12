// Your code goes here
const EMAIL_LENGTH_MIN = 5;
const PASSWORD_LENGTH_MIN = 6;
const DATA = {
    'admin@gmail.com': 'AdminPass',
    'user@gmail.com': 'UserPass'
}

let email = prompt('Please, enter your email', '');

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < EMAIL_LENGTH_MIN) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (!DATA[email]) {
    alert('I don’t know you');
} else {
    let password = prompt('Please, enter your password', '');
    if (password === '' || password === null) {
        alert('Cancelled');
    } else if (password !== DATA[email]) {
        alert('Wrong password');
    } else {
        let confirmation = confirm('Do you want to change your password?');
        if (!confirmation) {
            alert('You have failed the change');
        } else {
            let сurrentPass = prompt('Please, enter your current password', '');
            if (сurrentPass === '' || сurrentPass === null) {
                alert('Cancelled');
            } else if (сurrentPass !== password) {
                alert('Wrong password');
            } else {
                let newPassword = prompt('Please, enter a new password', '');
                if (!newPassword) {
                    alert('Cancelled');
                } else if (newPassword.length < PASSWORD_LENGTH_MIN) {
                    alert('It’s too short password. Sorry.');
                } else if (newPassword !== prompt('Please, enter a new password again', '')) {
                    alert('You wrote the wrong password');
                } else {
                    DATA[email] = newPassword;
                    alert(DATA[email]);
                    alert('You have successfully changed your password');
                }
            }
        }
    }
}









