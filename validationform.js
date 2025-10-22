const form = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");

// helper function to show or hide error messages
function showError(inputElement, message) {
  const errorDiv = inputElement.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains("error-msg")) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
  }
}

function hideError(inputElement) {
  const errorDiv = inputElement.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains("error-msg")) {
    errorDiv.classList.add("hidden");
  }
}

function validateForm() {
  let isValid = true;

  // Validate Name
  if (contactName.value.trim() === "") {
    showError(contactName, "Name is required");
    isValid = false;
  } else {
    hideError(contactName);
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (contactEmail.value.trim() === "" || !emailPattern.test(contactEmail.value)) {
    showError(contactEmail, "Valid email is required");
    isValid = false;
  } else {
    hideError(contactEmail);
  }

  // Validate Subject
  if (contactSubject.value.trim() === "") {
    showError(contactSubject, "Subject is required");
    isValid = false;
  } else {
    hideError(contactSubject);
  }

  // Validate Message
  if (contactMessage.value.trim() === "" || contactMessage.value.trim().length < 10) {
    showError(contactMessage, "Message must be at least 10 characters");
    isValid = false;
  } else {
    hideError(contactMessage);
  }

  return isValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
