 // Restrict phone input to valid international phone number characters
 document.getElementById("phone").addEventListener("input", function (event) {
    // Allow only numbers, +, -, and spaces
    this.value = this.value.replace(/[^0-9+\- ]/g, "");
});

// Phone number validation regex (international format)
const phoneRegex = /^[+]*[0-9][0-9\s\-]*$/;

// Form validation logic on submit
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.style.display = "none");

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    if (!name) {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById("phone-error").style.display = "block";
        isValid = false;
    }

    // Custom Email validation
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Message validation
    const message = document.getElementById("message").value;
    if (!message) {
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    }


    if (isValid) {
        // Hide the form and show the thank you message
        document.querySelector(".form-sec").style.display = "none";
        document.querySelector(".after-sub").style.display = "block";
    }
});

// Add event listeners to hide the error message when user starts typing (except for email and phone)
function addInputListener(inputId, errorId) {
    document.getElementById(inputId).addEventListener("input", function () {
        // If the input has a value, hide the error message
        if (this.value) {
            document.getElementById(errorId).style.display = "none";
        } else {
            document.getElementById(errorId).style.display = "block";
        }
    });
}

// Attach input listeners to fields (skip email and phone)
addInputListener("name", "name-error");
addInputListener("message", "message-error");