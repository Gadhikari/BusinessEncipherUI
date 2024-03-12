
const messageContainer = document.getElementById("messageContainer");

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    contact: document.getElementById("contact").value
  };
  
  /* make sure to replace the xxxxxxx with the form id you created on fabform.io */
  
  fetch('https://fabform.io/f/pPppMKr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === "true") {
      messageContainer.innerHTML = "<p style='color: green;'>Form submitted successfully!</p>";
    } else {
      throw new Error('Server response indicates failure');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    messageContainer.innerHTML = "<p style='color: red;'>An error occurred while submitting the form.</p>";
  });
});







