function errorMessage() {

    var valid = true;
    var firstName = document.getElementById("firstName ").value;
    var n = firstName.length;
    document.write(n)
    var lastName = document.getElementById("lastName ").value;
    var email = document.getElementById("email ").value;
    var address = document.getElementById("address ").value;
    var password = document.getElementById("password ").value;
    var confirmPassword = document.getElementById("confirmPassword ").value;

    var error = document.getElementById("fname_error")

    if (n > 2) {

        // Changing content and color of content 
        error.textContent = "Pleasse fill out this field."
        error.style.color = "red"
    } else {
        error.textContent = "else"
    }
}

function validation() {

    var firstName = document.getElementById("firstName ").value;
    var n = firstName.length;
    var lastName = document.getElementById("lastName ").value;
    var email = document.getElementById("email ").value;
    var address = document.getElementById("address ").value;
    var password = document.getElementById("password ").value;
    var confirmPassword = document.getElementById("confirmPassword ").value;



    if (firstName.length >= 3 && firstName.length <= 7) {
        prompt("correct ")
    }



    if (password != confirmPassword) {
        alert("Password should be match ");
    }


    if (document.myform.address.value == " ") {
        document.getElementById('fname_error').innerHTML = "*Please enter a username* ";
        return false;
    }
}