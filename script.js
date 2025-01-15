const email = document.getElementById('email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    if (!emailPattern.test(email.value)) {
        alert("There is something wrong in your email")
        isValid = false;
    } else {
        isValid = true
    }

    if (isValid) {
        alert("Successfully submitted");
        email.value = " "
    }
});

